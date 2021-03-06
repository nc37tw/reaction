import { createMockNetworkLayer } from "Artsy/Relay/createMockNetworkLayer"
import { buildClientApp } from "Artsy/Router"
import { HistoryOptions } from "farce"
import { IMocks } from "graphql-tools/dist/Interfaces"
import React from "react"
import { MatchingMediaQueries } from "Utils/Responsive"

interface Props {
  routes: object[]
  initialMatchingMediaQueries?: MatchingMediaQueries
  initialRoute?: string
  initialState?: object
  historyOptions?: HistoryOptions
  mockResolvers?: IMocks
  context?: object
}

export class StorybooksRouter extends React.Component<Props> {
  state = {
    ClientApp: null,
  }

  static defaultProps = {
    initialRoute: "/",
  }

  async componentDidMount() {
    const {
      routes,
      initialRoute,
      historyOptions,
      initialMatchingMediaQueries,
      mockResolvers,
      context,
    } = this.props

    try {
      const { ClientApp } = await buildClientApp({
        routes,
        initialRoute,
        history: {
          protocol: "memory",
          options: historyOptions,
        },
        context: {
          ...context,
          initialMatchingMediaQueries,
          relayNetwork: mockResolvers && createMockNetworkLayer(mockResolvers),
        },
      })

      this.setState({
        ClientApp,
      })
    } catch (error) {
      console.error("StorybooksRouter.story", error)
    }
  }

  render() {
    const { ClientApp } = this.state

    return (
      <React.Fragment>
        {ClientApp && <ClientApp {...this.props.initialState} />}
      </React.Fragment>
    )
  }
}
