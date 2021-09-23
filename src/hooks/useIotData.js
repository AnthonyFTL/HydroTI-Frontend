import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { useEffect, useState } from "react";

const useIotData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    var sock = new SockJS("http://localhost:8080/ws");
    let client = Stomp.over(sock);

    client.connect({}, () => {
      client.subscribe("/iot/last-values", (response) => {
        const parsedValues = JSON.parse(response.body);
        if (parsedValues) {
          setData(parsedValues);
        }
      });
    });
    return () => client && client.disconnect();
  }, []);

  return data;
};

export default useIotData;
