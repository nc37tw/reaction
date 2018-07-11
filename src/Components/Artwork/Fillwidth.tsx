import React from "react"
import { createFragmentContainer, graphql } from "react-relay"

import sizeMe from "react-sizeme"
import styled from "styled-components"

import fillwidthDimensions from "../../Utils/fillwidth"
import RelayFillwidthItem, { FillwidthItem } from "./FillwidthItem"

import { find } from "lodash"

interface RelayProps {
  artworks: {
    edges: Array<{
      node: any
    } | null> | null
  }
}

interface Props extends RelayProps, React.HTMLAttributes<FillwidthContainer> {
  targetHeight?: number
  gutter?: number
  size?: any
  useRelay?: boolean
}

class FillwidthContainer extends React.Component<Props, null> {
  public static defaultProps: Partial<Props> = {
    useRelay: true,
  }

  renderArtwork(artwork, dimensions, i) {
    const { gutter, useRelay } = this.props
    const artworkSize = find(dimensions, ["__id", artwork.__id])
    const FillWidthItemBlock = useRelay ? RelayFillwidthItem : FillwidthItem

    return (
      <FillWidthItemBlock
        artwork={artwork as any}
        key={"artwork--" + artwork.__id}
        targetHeight={artworkSize.height}
        imageHeight={artworkSize.height}
        width={artworkSize.width}
        margin={i === dimensions.length - 1 ? 0 : gutter}
        useRelay={useRelay}
      />
    )
  }

  render() {
    const artworks = this.props.artworks.edges
    const dimensions = fillwidthDimensions(
      this.props.artworks.edges,
      this.props.size.width,
      this.props.gutter,
      this.props.targetHeight
    )
    return (
      <div className={this.props.className}>
        {artworks.map((artwork, i) =>
          this.renderArtwork(artwork.node, dimensions, i)
        )}
      </div>
    )
  }
}

const StyledFillwidth = styled(FillwidthContainer)`
  margin-bottom: 50px;
`

StyledFillwidth.defaultProps = {
  targetHeight: 180,
  gutter: 10,
}

const sizeMeOptions = {
  monitorHeight: false,
  refreshRate: 64,
  refreshMode: "debounce",
}

export const Fillwidth = sizeMe(sizeMeOptions)(
  StyledFillwidth
) as React.StatelessComponent<Props>

export default createFragmentContainer(
  Fillwidth,
  graphql`
    fragment Fillwidth_artworks on ArtworkConnection {
      edges {
        node {
          __id
          image {
            aspect_ratio
          }
          ...FillwidthItem_artwork
        }
      }
    }
  `
)