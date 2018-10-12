import http from "k6/http";
import { sleep, check } from "k6";

export let options = {
  vus: 100,
  duration: '30s' 
  //stages: [{
    // { duration: '30s', target: 50}
  //}] 
}

export default function() {
  let res = http.get(`http://localhost:4080/artists/15/`);
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 200
  });
  sleep(1);
};