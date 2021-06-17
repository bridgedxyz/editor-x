import React from "react";
import styled from "@emotion/styled";
import "@editor-ui/theme";

interface Props {
  controlDoubleClick: (e?) => void;
  children?: JSX.Element | JSX.Element[] | undefined;
  enabled?: boolean;
}

export function BarDragArea(props: Props) {
  const enabled = props.enabled === undefined ? true : props.enabled;
  return (
    <>
      {enabled && (
        <Wrapper onDoubleClick={props.controlDoubleClick}>
          {props.children}
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div(({ theme }) => ({
  /** https://www.electronjs.org/docs/api/frameless-window#draggable-region - this is also present on side nav bar*/
  "-webkit-app-region": "drag",
  width: "100%",
  height: theme.sizes.desktopControlWindowBar.height,
}));