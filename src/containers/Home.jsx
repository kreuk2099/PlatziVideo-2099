import React from "react";
import { connect } from "react-redux";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import useInitialState from "../hooks/useInitialState";

// const API = "http://localhost:3000/initialState";
//const initialState = useInitialState(API);

const Home = ({myList, trends, originals}) => {

  return (
    <>
      {myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map(item => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};
// export default Home;
export default connect(
  mapStateToProps,
  null
)(Home);
