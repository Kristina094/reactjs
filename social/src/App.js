import {
  Air,
  AnimationRounded,
  ChargingStation,
  Info,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import Home from "./pages/home/Home";
import { primary, Button } from "antd";
import { sendRequest, urlLookup } from "./settings/Settings";
// import { Person } from "@mui/icons-material";
function App() {
  const [datas, setDatas] = useState();

  useEffect(() => {
    const bodyChiglel = {
      action: "chiglel",
    };

    sendRequest(urlLookup, bodyChiglel).then((data) => setDatas(data));
  }, []);

  const DisplayData =
    datas &&
    datas.data.map((gazar) => {
      return (
        <div key={gazar.chiglelnum}>
          <h5>
            <Button
              type="primary"
              onClick={() => console.log(gazar.chiglelnum)}
            >
              {gazar.chiglelname}
            </Button>
          </h5>
          <br />
        </div>
      );
    });
  return (
    <>
      {DisplayData}
      <p>{datas && JSON.stringify(datas)}</p>
      <Home />
    </>
  );
}
export default App;
