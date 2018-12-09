import React from "react";
import { render } from "react-dom";
import posed, { PoseGroup } from "react-pose";
import styled from "styled-components";

import shuffle from "./shuffle.js";

const Container = styled.div`
  height: 100vh;
  idth: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = posed.li({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const StyledItem = styled(Item)`
  padding: 5px;
  list-style-type: none;
  margin: 5px 0px 5px 0px;
  border: 10px solid #f0932b;
`;

const ItemList = ({ items }) => (
  <ul>
    <PoseGroup>
      {items.map(item => (
        <StyledItem key={item.id}>{item.imsge}</StyledItem>
      ))}
    </PoseGroup>
  </ul>
);

class animation extends React.Component {
  state = {
    items: [
      {
        id: 1,
        imsge: (
          <img
            src="https://www5.idrottonline.se/globalassets/hermanstorp-kor-o-rk---ridsport/sponsring/falkenbergs-sparbank.png"
            alt="avatar"
            className="avatar-img"
          />
        )
      },
      {
        id: 2,
        imsge: (
          <img
            src="https://bibliotek.falkenberg.se/documents/2135127/0/ungfbg_logo_lila_RGB.jpg/8b0d3a85-6943-4bc3-ba84-e9888a82f189?t=1445257979239"
            alt="avatar"
            className="avatar-img"
          />
        )
      },
      {
        id: 3,
        imsge: (
          <img
            src="https://i.ytimg.com/vi/QyMPWIwmswk/maxresdefault.jpg"
            alt="avatar"
            className="avatar-img"
          />
        )
      },

      {
        id: 4,
        imsge: (
          <img
            src="https://yt3.ggpht.com/a-/ACSszfG4WUKInBcVFGl3Q8c3t6wv-SC9DaIYpV7bSw=s900-mo-c-c0xffffffff-rj-k-no"
            alt="avatar"
            className="avatar-img"
          />
        )
      }
    ]
  };

  _shuffle = () => {
    this.setState({ items: shuffle(this.state.items) });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.interval = setInterval(this._shuffle, 2000);
  }

  render() {
    return (
      <Container>
        <ItemList items={this.state.items} />
      </Container>
    );
  }
}

export default SecondAnimation;
