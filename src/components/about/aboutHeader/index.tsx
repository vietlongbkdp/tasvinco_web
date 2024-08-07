import { AboutHeader } from 'assets';
import React from 'react';
import {
  AboutMenu,
  AboutNav,
  Content,
  IconCompany,
  IconHand,
  IconIntersect,
  IconMission,
  IconRewind,
  IconUsers,
  ImagesBox,
  ImagesStyles,
  NavContent,
  NawItemBox,
} from './styled';
import { AboutHeaderData } from './constant';

const iconMap = {
  IconRewind,
  IconCompany,
  IconHand,
  IconIntersect,
  IconMission,
  IconUsers,
};

export const AboutHeaderComponent = ({ selectedId, handleClick }) => {
  return (
    <>
      <ImagesBox>
        <ImagesStyles src={AboutHeader} />
        <Content>ĐẦU TƯ ĐÚNG, ĐỦ, HIỆU QUẢ & GIÁ ĐẦU TƯ THẤP</Content>
      </ImagesBox>
      <AboutMenu>
        <AboutNav>
          {AboutHeaderData.length &&
            AboutHeaderData.map((data) => {
              const IconComponent = iconMap[data.icon];
              return (
                <NawItemBox key={data.id} isSelected={selectedId === data.id} onClick={() => handleClick(data.id)}>
                  <IconComponent className="icon-path" />
                  <NavContent>{data.content}</NavContent>
                </NawItemBox>
              );
            })}
        </AboutNav>
      </AboutMenu>
    </>
  );
};
