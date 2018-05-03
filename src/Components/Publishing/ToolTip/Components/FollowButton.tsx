import styled, { StyledFunction } from "styled-components"
import React from "react"
import { unica } from "Assets/Fonts"
import Colors from "Assets/Colors"

interface Props {
  item?: {
    __id: string
    id: string
    is_followed: boolean | null
  }
  currentUser?: object
}

interface State {
  showUnfollow: boolean
}

export class FollowButton extends React.Component<Props, State> {
  state = {
    showUnfollow: false,
  }

  render() {
    const { showUnfollow } = this.state
    const isFollowed = this.props.item ? this.props.item.is_followed : true
    const text = isFollowed
      ? showUnfollow
        ? "Unfollow"
        : "Following"
      : "Follow"

    return (
      <FollowButtonContainer
        isFollowed={isFollowed}
        onMouseEnter={() => this.setState({ showUnfollow: true })}
        onMouseLeave={() => this.setState({ showUnfollow: false })}
      >
        {text}
      </FollowButtonContainer>
    )
  }
}

interface DivProps {
  isFollowed: boolean
}

const Div: StyledFunction<DivProps & React.HTMLProps<HTMLDivElement>> =
  styled.div

const FollowButtonContainer = Div`
  border: 1px solid ${Colors.grayRegular};
  ${unica("s12", "medium")};
  width: 80px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isFollowed ? Colors.grayMedium : "black")}
  &:hover {
    ${props =>
      !props.isFollowed &&
      `
      border-color: black;`}
    background: ${props => (props.isFollowed ? "white" : "black")}
    color: ${props => (props.isFollowed ? Colors.redMedium : "white")}
  }
`
