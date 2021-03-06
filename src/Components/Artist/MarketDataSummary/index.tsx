import React from "react"
import { graphql, QueryRenderer } from "react-relay"

import { MarketDataSummaryContentsQuery } from "__generated__/MarketDataSummaryContentsQuery.graphql"
import { ContextProps, withContext } from "Artsy/SystemContext"
import MarketDataSummary from "./MarketDataSummary"

export interface Props extends ContextProps {
  artistID: string
}

class MarketDataSummaryContents extends React.Component<Props, null> {
  render() {
    const { artistID, relayEnvironment } = this.props
    return (
      <QueryRenderer<MarketDataSummaryContentsQuery>
        environment={relayEnvironment}
        query={graphql`
          query MarketDataSummaryContentsQuery($artistID: String!) {
            artist(id: $artistID) {
              ...MarketDataSummary_artist
            }
          }
        `}
        variables={{ artistID }}
        render={({ props }) => {
          if (props) {
            return <MarketDataSummary artist={props.artist} />
          } else {
            return null
          }
        }}
      />
    )
  }
}

export const Contents = withContext(MarketDataSummaryContents)
