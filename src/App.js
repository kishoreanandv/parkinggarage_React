import "./App.css";
import { useMemo, useState } from "react";
import Input from "./components/Input";
import Table from "./components/Table";

const formFields = [
  {
    type: "number",
    name: "carNumber",
    id: "carNumber",
    placeholder: "Car number",
    label: "Car Number",
  },
  {
    type: "text",
    name: "driverName",
    id: "driverName",
    placeholder: "Driver Name",
    label: "Driver Name",
  },
  {
    type: "datetime-local",
    name: "checkIn",
    id: "checkIn",
    placeholder: "",
    label: "Check-In Time",
  },
  {
    type: "datetime-local",
    name: "checkOut",
    id: "checkOut",
    placeholder: "Car number",
    label: "Check-Out Time",
  },
];

const AVAILABLE_VEHICLE_IN_GARAGE_COLUMS = [
  {
    name: "Car Number",
    key: "carNumber",
  },
  {
    name: "Driver",
    key: "driverName",
  },
];

const ALL_VEHICLE_COLUMS = [
  ...AVAILABLE_VEHICLE_IN_GARAGE_COLUMS,
  {
    name: "Check In",
    key: "checkIn",
  },
  {
    name: "Check Out",
    key: "checkOut",
  },
];
const initialState = {
  carNumber: "",
  driverName: "",
  checkIn: "",
  checkOut: "",
};

function App() {
  const [inputData, setInputData] = useState(initialState);

  const [allVehicleData, setAllVehicleData] = useState([]);

  const handleChange = (e, name) => {
    setInputData({
      ...inputData,
      [name]: e.target.value,
    });
  };

  const pushdata = (e) => {
    e.preventDefault();
    setAllVehicleData([...allVehicleData, ...[inputData]]);
    setInputData(initialState);
  };

  const availableVehicles = useMemo(() => {
    return allVehicleData.filter((x) => x.checkOut === "");
  }, [allVehicleData]);

  return (
    <div className="App">
      <div className="heading">
        <h1> CAR PARKING SYSTEM 🚗 </h1>
      </div>
      <div className="container">
        <form className="inputdetails">
          {formFields.map(({ label, placeholder, name, id, type }) => (
            <Input
              label={label}
              placeholder={placeholder}
              name={name}
              id={id}
              type={type}
              value={inputData[name]}
              onChange={(e) => handleChange(e, name)}
              key={id}
            />
          ))}
          <div>
            <button onClick={pushdata}> SUBMIT </button>
          </div>
        </form>

        <br></br>
        <br></br>
        <Table
          data={availableVehicles}
          heading="AVAILABLE CARS IN GARAGE"
          columns={AVAILABLE_VEHICLE_IN_GARAGE_COLUMS}
        />

        <Table
          data={allVehicleData}
          heading="ALL VEHICLE DETAILS"
          columns={ALL_VEHICLE_COLUMS}
        />

        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default App;
