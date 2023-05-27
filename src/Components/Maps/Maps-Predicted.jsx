import React, { useState, useRef } from "react";
import { TileLayer, Marker, MapContainer, FeatureGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { toast } from "react-toastify";
import "leaflet.fullscreen/Control.FullScreen.css";
import "leaflet.fullscreen";
import "react-toastify/dist/ReactToastify.css";
import {
  redMarker,
  blueMarker,
  greenMarker,
  orangeMarker,
} from "./MarkerColor";
import { EditControl } from "react-leaflet-draw";
import { Circle, Popup } from "react-leaflet";
import useGeolocation from "./useGelolocation";
// datetime and value ma model bananu paryo sakesmma library use nagarni . you can use numpy pandas .
import L from "leaflet";
import { useQuery } from "@tanstack/react-query";
import { getPredictedData } from "../API/API";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  Button,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
} from "reactstrap";
import { BsInfoCircleFill } from "react-icons/bs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const PredictedMap = () => {
  //-----------------------form section-------------------------
  const [selectedDate, setSelectedDate] = useState(null);
  const [responseData, setResponseData] = useState([]);
  const dateInputRef = useRef(null);
  const [dateInfo, displayDateInfo] = useState(false);
  const navigate = useNavigate();

  const handlePredictButtonClick = async () => {
    if (selectedDate) {
      displayDateInfo(true);
      console.log(dateInfo, "dateInfo");
      const formattedDate = formatDate(selectedDate);
      const predictedData = await handleButtonClick(formattedDate);
      navigate("/prediction/", { state: { predictedData } });
    } else {
      console.log("error");
      toast.error(" Please select a valid date !", {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

  const formatDate = (date) => {
    if (!date) {
      return null;
    }
    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = `${dateObject.getMonth() + 1}`.padStart(2, "0");
    const day = `${dateObject.getDate()}`.padStart(2, "0");
    return `${year}${month}${day}`;
  };

  const handleButtonClick = async (formattedDate) => {
    if (!formattedDate) {
      return null;
    }
    try {
      const response = await getPredictedData(formattedDate);
      // console.log("...", response);
      setResponseData(response);
      observeRef.current.scrollIntoView({ behavior: "smooth" });
      return response;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch predicted data");
    }
  };
  const { isLoading, isError } = useQuery({
    queryKey: ["datas", selectedDate],
    queryFn: () => handleButtonClick(),
  });

  //----------------------------------------------------------------
  //--------------------------- maps sections--------------------------
  const location = useGeolocation();
  const [circleVisibility, setCircleVisibility] = useState(false);
  const center = {
    lat: 28.3974,
    lng: 84.1258,
  };
  const mapRef = useRef(null);
  const _created = (e) => {
    console.log(e);
  };
  const redOptions = {
    color: "red",
  };
  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      //   console.log(mapRef.current.flyTo);
      mapRef.current.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        17,
        { animate: true }
      );
    } else {
      alert(location.error.message);
    }
  };

  const handleMarkerClick = () => {
    setCircleVisibility(!circleVisibility);
  };

  const observeRef = useRef(null);

  // --------------------------map section ends -----------------------------------------------

  return (
    <div className=" map-section-container ">
      <div className="container d-flex flex-column align-items-center">
        <div data-aos="fade-up">
          <h2 className="map-heading text-center pt-5 pb-3">
            {" "}
            Predict Future Water Levels
          </h2>
          <div className="d-flex flex-column align-items-center">
            <p className="text-center col-lg-10 pb-3  par">
              The system is designed to predict the water levels at different
              locations or stations, which will help people in those areas to
              prepare for potential flooding. The prediction model uses various
              data sources, such as historical water levels, weather forecasts,
              and river flow rates, to provide accurate and timely predictions.
              By using this system, people can stay informed about the potential
              risks and take necessary precautions to minimize the damage caused
              by flooding.
              <br />
            </p>
          </div>
        </div>
        <div className="w-100 mt-5">
          <div className="d-flex justify-content-between align-items-center ">
            <div className="pl-3">
              <Button id="PopoverFocus" type="button">
                <BsInfoCircleFill className="i-icon" />
              </Button>
              <UncontrolledPopover
                placement="right-end"
                target="PopoverFocus"
                style={{ maxWidth: "10cm" }}
                className="ml-5"
              >
                <PopoverHeader>Implementation of TSA module</PopoverHeader>
                <PopoverBody
                  style={{ width: "10cm", overflowY: "scroll", height: "5cm" }}
                >
                  <p>
                    Step: 1<br />
                    df = pd.read_csv('chisapani_all.csv')
                    <br />
                    df['dateTime'] = pd.to_datetime(df['dateTime'])
                    <br />
                    df['value'] = pd.to_numeric(df['value'], errors='coerce')
                    <br />
                    df['value'].replace('', np.nan)
                    <br />
                    df['value'].replace(' ', np.nan)
                    <br />
                    df['value'] = df['value'].interpolate()
                    <br />
                    <br />
                    Load the data and perform preprocessing. convert datetime in
                    csv file into datetime object, replicate the missing values
                    with N/A and interpolate them.
                    <br />
                    <br />
                    Step: 2<br />
                    df['hour'] = df['dateTime'].dt.hour
                    <br />
                    df['dayofweek'] = df['dateTime'].dt.dayofweek
                    <br />
                    df['quarter'] = df['dateTime'].dt.quarter
                    <br />
                    df['month'] = df['dateTime'].dt.month
                    <br />
                    df['year'] = df['dateTime'].dt.year
                    <br />
                    df['dayofyear'] = df['dateTime'].dt.dayofyear
                    <br />
                    df['dayofmonth'] = df['dateTime'].dt.day
                    <br />
                    df['weekofyear'] = df['dateTime'].dt.isocalendar().week
                    <br />
                    <br />
                    Split the datetime into a series of features.
                    <br />
                    <br />
                    Step: 3<br />
                    train_size = int(0.7 * len(df))
                    <br />
                    train = df[:train_size]
                    <br />
                    test = df[train_size:]
                    <br />
                    <br />
                    Split the dataset into training and testing datasets.
                    <br />
                    <br />
                    Step: 4<br />
                    def fit(self, X, y):
                    <br />
                    try:
                    <br />
                    self.base_pred = np.mean(y)
                    <br />
                    except Exception as e:
                    <br />
                    print("Error in calculating mean:", e)
                    <br />
                    print("y values:", y)
                    <br />
                    return
                    <br />
                    residual = y - self.base_pred
                    <br />
                    X = X.values
                    <br />
                    for i in range(self.n_estimators):
                    <br />
                    print(i)
                    <br />
                    tree = self._build_tree(X, residual, depth=0)
                    <br />
                    self.trees.append(tree)
                    <br />
                    pred = self.predict(X)
                    <br />
                    residual -= self.learning_rate * pred
                    <br />
                    <br />
                    Calculate the initial base prediction and loop until the
                    desired number of decision trees is reached.
                    <br />
                    <br />
                    Step: 5<br />
                    def _find_best_split(self, X, y):
                    <br />
                    best_feature = None
                    <br />
                    best_value = None
                    <br />
                    best_score = np.inf
                    <br />
                    for feature in range(X.shape[1]):
                    <br />
                    for value in np.unique(X[:, feature]):
                    <br />
                    left_idx = X[:, feature] &lt; value
                    <br />
                    right_idx = X[:, feature] &gt;= value
                    <br />
                    if np.sum(left_idx) == 0 or np.sum(right_idx) == 0:
                    <br />
                    continue
                    <br />
                    left = y[left_idx]
                    <br />
                    right = y[right_idx]
                    <br />
                    score = np.sum((left - np.mean(left))**2) + np.sum((right -
                    np.mean(right))**2)
                    <br />
                    if score &lt; best_score:
                    <br />
                    best_feature = feature
                    <br />
                    best_value = value
                    <br />
                    best_score = score
                    <br />
                    return best_feature, best_value
                    <br />
                    <br />
                    Find the best split for each node to create a decision tree.
                    the best split is chosen by optimizing the loss function,
                    which is Sum of squared errors.
                    <br />
                    <br />
                    Step: 6<br />
                    def _build_tree(self, X, y, depth):
                    <br />
                    if depth == self.max_depth:
                    <br />
                    return LeafNode(y)
                    <br />
                    split_feature, split_value = self._find_best_split(X, y)
                    <br />
                    if split_feature is None:
                    <br />
                    return LeafNode(y)
                    <br />
                    left_idx = X[:, split_feature] &lt; split_value
                    <br />
                    right_idx = X[:, split_feature] &gt;= split_value
                    <br />
                    left = self._build_tree(X[left_idx], y[left_idx], depth+1)
                    <br />
                    right = self._build_tree(X[right_idx], y[right_idx],
                    depth+1)
                    <br />
                    return DecisionNode(split_feature, split_value, left, right)
                    <br />
                    <br />
                    create trees for each loop, considering the best split.
                    <br />
                    <br />
                    Step: 7<br />
                    def predict(self, X):
                    <br />
                    pred = np.array([self.base_pred]*len(X))
                    <br />
                    for tree in self.trees:
                    <br />
                    pred += self.learning_rate * tree.predict(X)
                    <br />
                    return pred
                    <br />
                    <br />
                    Predict values from all currently existing trees and make a
                    final prediction including the base prediction and learning
                    rate.
                    <br />
                  </p>
                </PopoverBody>
              </UncontrolledPopover>
            </div>

            <div className="d-flex   align-middle justify-content-end  pl-5 mb-3">
              <p className="select-date d-flex  align-items-center ">
                Select Date:
              </p>
              <input
                type="date"
                onChange={(e) => setSelectedDate(e.target.value)}
                ref={dateInputRef}
                className="input mx-3"
              />{" "}
              <br />
              <button
                className="btn btn-primary  "
                onClick={() => handlePredictButtonClick()}
              >
                {" "}
                Predict
              </button>
              <button
                className="btn btn-primary btn-location ml-3 mr-5 pl-1 pr-2 "
                onClick={showMyLocation}
              >
                <FaMapMarkerAlt fill="white" className="mr-1" />
                Locate Me
              </button>
            </div>
          </div>
        </div>
        <div className=" d-flex flex-row justify-content-start text-left w-100 pl-5">
          {dateInfo && (
            <p className="sub-info" ref={observeRef}>
              * The map shows predicted water level of {selectedDate}
            </p>
          )}
        </div>
        <div className="container map-container ">
          <div className="row map-row">
            <div className="col text-center">
              <div className="col">
                <MapContainer
                  center={center}
                  zoom={7}
                  ref={mapRef}
                  fullscreenControl={true}
                  attributionControl={false}
                >
                  <FeatureGroup>
                    <EditControl
                      position="bottomleft"
                      onCreated={_created}
                      draw={{
                        rectangle: false,
                        circle: false,
                        circlemarker: false,
                        polygon: false,
                      }}
                    />
                  </FeatureGroup>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                  {
                    <div>
                      {responseData &&
                        responseData?.map((station, index) => {
                          return (
                            <div key={index}>
                              <Marker
                                icon={
                                  Number(station?.value) >
                                  Number(station?.danger_level)
                                    ? redMarker
                                    : Number(station?.value) >
                                      Number(station?.warning_level)
                                    ? orangeMarker
                                    : greenMarker
                                }
                                position={[
                                  station?.latitude,
                                  station?.longitude,
                                ]}
                                eventHandlers={{ click: handleMarkerClick }}
                              >
                                <Popup>
                                  {station?.name} <br />
                                  Water Level:
                                  {Number(station?.value).toFixed(2)}m
                                  <br />
                                  {station?.Training_MSE} <br />
                                  {station?.obserror} <br />
                                  {Number(station?.value) >
                                  Number(station?.danger_level) ? (
                                    <p style={{ margin: 0 }}>
                                      Status:
                                      <span className="dangerLevelText">
                                        Flood ALert
                                      </span>
                                    </p>
                                  ) : Number(station?.value) >
                                    Number(station?.warning_level) ? (
                                    <p style={{ margin: 0 }}>
                                      Status:
                                      <span className="warningText">
                                        Chance of Flood
                                      </span>
                                    </p>
                                  ) : (
                                    <p style={{ margin: 0 }}>
                                      Status :
                                      <span className="steadyText">
                                        Steady Flow
                                      </span>
                                    </p>
                                  )}
                                  {circleVisibility && (
                                    <Circle
                                      center={[
                                        station?.latitude,
                                        station?.longitude,
                                      ]}
                                      pathOptions={redOptions}
                                      radius={1000}
                                    />
                                  )}
                                </Popup>
                              </Marker>
                            </div>
                          );
                        })}
                    </div>
                  }
                  {location.loaded && !location.error && (
                    <>
                      <Marker
                        icon={blueMarker}
                        position={[
                          location.coordinates.lat,
                          location.coordinates.lng,
                        ]}
                      >
                        <Popup>Current Location</Popup>
                      </Marker>
                    </>
                  )}
                </MapContainer>
              </div>
            </div>
          </div>
          <div className="row py-5">
            <div className="col d-flex justify-content-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictedMap;
