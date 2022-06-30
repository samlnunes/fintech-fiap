import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

import AddIcon from "@mui/icons-material/Add";
import BarChartIcon from '@mui/icons-material/BarChart';

import { Actions, Card, Slide } from "../../components";

import { Container, ContentActions, Row } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ContentActions>
        <Actions src={<AddIcon />} title="Receita" />
        <Actions src={<AddIcon />} title="Gasto" />
        <Actions src={<AddIcon />} title="Investimento" />
        <Actions src={<BarChartIcon />} title="Histórico" />
      </ContentActions>
      <Row>
        <Card bgColor="#1974B9" title="Saldo do mês" value="3.550,00" />
      </Row>
      <Row>
        <Card
          bgColor="#008000"
          title="Recebimentos"
          value="5.200,00"
          fontSize="22px"
          alignItems="center"
        />
        <Card
          bgColor="#D40000"
          title="Gastos"
          value="1.650,00"
          fontSize="22px"
          alignItems="center"
        />
      </Row>
      <Row>
        <Card
          bgColor="#1974B9"
          title="Investimentos"
          value="2.890,98"
          fontSize="22px"
          alignItems="center"
        />
        <Card
          bgColor="#1974B9"
          title="Gastos"
          value="10,00"
          fontSize="22px"
          alignItems="center"
        />
      </Row>
      <Row>
        <Swiper
          className="mySwiper"
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <Slide
              src="/img1.jpg"
              text="A análise do Safra para o Itaú (ITUB4)"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide src="/img2.png" text="BTG Pactual eleva WEG para ‘compra’" />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              src="/img3.jpg"
              text="BTG eleva preço-alvo de Cielo mas se mantém ‘neutro’"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              src="/img4.png"
              text="Petz anuncia pagamento de juros sobre o capital"
            />
          </SwiperSlide>
        </Swiper>
      </Row>
    </Container>
  );
};

export default Dashboard;
