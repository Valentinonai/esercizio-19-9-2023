import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFavourite, changeSearch, deleteFavourite, isLoadingOn } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const azienda = useSelector((state) => state.favourites.azienda);
  return (
    <>
      {azienda.find((elem) => elem.company_name === data.company_name) ? (
        <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
          <Col xs={2}>
            <i
              className="bi bi-heart-fill"
              style={{ color: "red" }}
              onClick={() => {
                dispatch(deleteFavourite(data.company_name));
              }}
            ></i>
          </Col>
          <Col xs={3}>
            <Link
              to={`/${data.company_name}`}
              onClick={() => {
                dispatch(isLoadingOn(true));
                dispatch(changeSearch(false));
              }}
            >
              {data.company_name}
            </Link>
          </Col>
          <Col xs={4}>
            <a href={data.url} target="_blank" rel="noreferrer">
              {data.title}
            </a>
          </Col>
          <Col xs={3}>
            <Button
              variant="info"
              onClick={() => {
                dispatch(addFavourite(data));
                dispatch(changeSearch(false));
              }}
            >
              Add to favourites
            </Button>
          </Col>
        </Row>
      ) : (
        <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
          <Col xs={2}>
            <i className="bi bi-heart"></i>
          </Col>
          <Col xs={3}>
            <Link
              to={`/${data.company_name}`}
              onClick={() => {
                dispatch(isLoadingOn(true));
              }}
            >
              {data.company_name}
            </Link>
          </Col>
          <Col xs={4}>
            <a href={data.url} target="_blank" rel="noreferrer">
              {data.title}
            </a>
          </Col>
          <Col xs={3}>
            <Button
              variant="info"
              onClick={() => {
                dispatch({ type: "ADD_COMPANY", payload: data });
              }}
            >
              Add to favourites
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Job;
