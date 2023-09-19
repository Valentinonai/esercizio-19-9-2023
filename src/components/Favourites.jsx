import { Button, Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavourite } from "../redux/actions";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();
  return (
    <>
      {
        <Container>
          <h1 className="my-5">Lista Preferiti</h1>
          <ListGroup>
            {favourites.azienda.map((elem, i) => (
              <ListGroup.Item className="d-flex justify-content-between align-items-center" key={`${i}-${elem._id}`}>
                <a href={elem.url}>
                  <span>{elem.company_name}</span>
                </a>
                <span>{elem.job_type}</span>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(deleteFavourite(elem.company_name));
                  }}
                >
                  Delete
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      }
    </>
  );
};
export default Favourites;
