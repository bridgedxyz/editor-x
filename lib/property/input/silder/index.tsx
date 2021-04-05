import React from "react";
import styled from "@emotion/styled";

interface SilderStyledProps {
  w?: number;
}

function Silder(props: { width?: number }) {
  const { width } = props;
  return (
    <Wrapper>
      <ActivateLine />
      <Line w={width} />
      <Circle />
    </Wrapper>
  );
}

export default Silder;

const Wrapper = styled.div`
  background-color: #fff;
  position: relative;
`;

const ActivateLine = styled.div`
  position: absolute;
  width: 0px;
  height: 2px;
  background-color: #8d5cf9;
  border-radius: 1px;
`;

const Circle = styled.div`
  cursor: pointer;
  top: 0px;
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  transform: translate(0px, -5px);
`;

const Line = styled.div<SilderStyledProps>`
  width: ${(p) => p.w ?? 180}px;
  height: 2px;
  background-color: #3c3c3c;
  border-radius: 1px;
`;