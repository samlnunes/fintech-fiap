import styled from "styled-components";

export const Container = styled.div`
  margin: 20px 8vw;

  .swiper {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;   
  }

  .swiper-slide img {
    min-width: 100%;
    height: 200px;
  }
`;

export const ContentActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Row = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
  width: 100%;
`;
