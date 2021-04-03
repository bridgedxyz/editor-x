import React from "react";
import styled from "@emotion/styled";
import { Struct } from "../hirachy";

interface HirachyItemStyledProps {
  ml?: number;
  isSelect?: boolean;
}

export interface HirachyItemProps {
  struct: Struct;
  isSelect?: boolean;
  onExpand: () => void;
  level: number;
}

function HirachyItem(props: HirachyItemProps) {
  const {
    onExpand,
    level,
    isSelect,
    struct: { title, child, type },
  } = props;
  return (
    <Wrapper isSelect={isSelect} ml={25 + 14 * level} onClick={onExpand}>
      <div>
        {child && (
          <img className="indicator" src="/assets/icons/item-indicator.svg" />
        )}
        <img className="icon" src={`/assets/icons/item-${type}.svg`} />
        <span>{title}</span>
      </div>
    </Wrapper>
  );
}

HirachyItem.defaultProps = {
  isSelect: false,
  level: 0,
};

export default HirachyItem;

const Wrapper = styled.div<HirachyItemStyledProps>`
  background-color: ${(p) => p.isSelect && `#514EFD`};

  max-width: 230px;
  height: 30px;
  margin-right: 9px;
  border-radius: 6px;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    height: 100%;
  margin-left: ${(p) => p.ml}px;
    
    span {
      color: #fff;
      font-size: 12px;
    }

    .icon {
      margin-left: 5px;
      margin-right: 4px;
    }
  }
`;