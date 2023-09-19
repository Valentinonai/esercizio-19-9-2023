import { useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../redux/actions";

const CompanySearchResults = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";
  const jobs = useSelector((state) => state.jobs.content);
  const isLoading = useSelector((state) => state.jobs.isLoading);
  const error = useSelector((state) => state.jobs.error);
  const errorMessage = useSelector((state) => state.jobs.errorMessage);
  useEffect(() => {
    dispatch(getJobs(baseEndpoint + params.company));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col className="my-3">
            <h1 className="display-4">Job posting for: {params.company}</h1>
            {isLoading ? (
              <div className="text-center mt-5">
                <Spinner animation="border" role="status" variant="primary">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : !error ? (
              jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
            ) : (
              <Alert variant="danger"> {errorMessage}</Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CompanySearchResults;
