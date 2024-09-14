let flyFrom = document.querySelector("#fly-from");
let flyTo = document.querySelector("#fly-to");
let deptDate = document.querySelector("#dept-date");

// function that filter the flights according to the input and store it into session storage
export function getFlights() {
  fetch("src/flights.json")
    .then((response) => response.json())
    .then((data) => {
      let flightList = data.flightList;

      const matchedFlights = flightList.filter(
        (flight) =>
          flight.from.toLowerCase() === flyFrom.value.toLowerCase() &&
          flight.to.toLowerCase() === flyTo.value.toLowerCase() &&
          flight.departureDate === deptDate.value
      );

      sessionStorage.setItem("matchedFlights", JSON.stringify(matchedFlights));
      window.location.href = "flights.html";
    });
}

// function that display the flights if there is no flights found then return no data found message
function displayFlights() {
  let finalFlights = JSON.parse(sessionStorage.getItem("matchedFlights"));

  let flightList = document.querySelector(".flight-list");

  if (finalFlights.length > 0) {
    finalFlights.forEach((flight) => {
      const flightCard = `<div class="card flex flex-col gap-2 p-4 lg:py-4 lg:px-7 w-full rounded-lg">
                      <span class="flex gap-1 text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26"
                              color="#6b7280" fill="none">
                              <path
                                  d="M10 9.50003L5.27531 4.47565C4.85705 4.0245 4.92403 3.69496 5.41729 3.40965C6.34454 2.8733 7.06689 2.85873 8.04428 3.39511L12.949 6.08675C13.2982 6.27836 13.6406 6.47259 14 6.57855"
                                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round" />
                              <path
                                  d="M12.5 13.6632L14.6103 20.4697C14.7826 21.0255 15.086 21.1263 15.556 20.8568C16.4396 20.3501 16.7958 19.765 16.8197 18.7107L16.9395 13.4198C16.9555 12.7131 16.9526 12.0215 17.5 11.5"
                                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round" />
                              <path
                                  d="M8.32846 10.9843L10.2154 9.60557L14.6377 6.38136L14.6416 6.37851L14.6491 6.37301C14.7535 6.29661 16.3094 5.16238 17.1919 4.77581C18.2765 4.30067 19.2869 4.52156 20.3739 4.82515C20.9362 4.98218 21.2173 5.06069 21.4202 5.20717C21.742 5.43958 21.9513 5.79728 21.9943 6.18852C22.0215 6.4351 21.9498 6.71459 21.8065 7.27356L21.8065 7.27358C21.5294 8.35431 21.2181 9.32819 20.2588 10.0175C19.4782 10.5784 17.7045 11.341 17.5856 11.3919L17.5771 11.3955L17.5726 11.3974L12.5317 13.5645L10.3782 14.4876L10.3782 14.4876C9.5974 14.8223 9.207 14.9896 8.94139 15.3002C8.31933 16.0275 8.23148 17.3438 7.99931 18.2494C7.87101 18.7498 7.16748 19.6171 6.54058 19.4869C6.15355 19.4065 6.14613 18.922 6.09796 18.6131L5.6342 15.6389C5.5233 14.9276 5.51479 14.9131 4.94599 14.4627L2.56757 12.5793C2.32053 12.3836 1.89903 12.135 2.022 11.7641C2.22119 11.1633 3.33408 10.9957 3.83747 11.1363C4.74834 11.3907 5.94747 11.9738 6.89684 11.8058C7.3022 11.7341 7.64428 11.4842 8.32844 10.9843L8.32846 10.9843Z"
                                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round" />
                          </svg> ${flight.flightNo}
                      </span>
                      <div class="flight-detail flex justify-between items-center gap-8">
                          <div class="from-detail flex flex-col">
                              <span class="from-time text-[1.2rem] md:text-[1.4rem] font-semibold">${flight.departureTime}</span>
                              <span class="from-city text-[1.1rem] md:text-[1.2rem]">${flight.fromCode}</span>
                          </div>
                          <div class="duration relative text-[1rem] md:text-[1.1rem] flex flex-col justify-center items-center">
                              <span>${flight.duration}</span>
                              <span>Non-stop</span>
                          </div>
                          <div class="to-detail flex flex-col">
                              <span class="to-time text-[1.2rem] md:text-[1.4rem] font-semibold">${flight.arrivalTime}</span>
                              <span class="to-city text-end text-[1.1rem] md:text-[1.2rem]">${flight.toCode}</span>
                          </div>
                      </div>
                      <div class="flight-fare flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
                          <div class="price flex gap-2 justify-center items-center">
                              <span class="text-gray-500">Starts at</span>
                              <span class="text-[1.4rem] text-[#3baad8]">&#8377;${flight.price}</span>
                          </div>
                          <button class="bg-[#3baad8] px-6 py-1.5 text-white rounded-lg text-[1.1rem]">Book Now</button>
                      </div>
                  </div>`;
      flightList.innerHTML += flightCard;
    });
  } else {
    flightList.innerHTML = `<div class="noflight flex flex-col justify-center items-center gap-5">
                    <div class="img w-[50%] md:w-[20%] lg:w-[12%]">
                        <img src="img/no data.png" alt="">
                    </div>
                    <div class="detail flex flex-col justify-center items-center">
                        <span class="text-[2rem] md:text-[2.2rem] font-bold">OOPS!</span>
                        <span class="text-[1.4rem] md:text-[1.5rem]">No Flights Found!</span>
                    </div>
                    <div class="link">
                        <a href="index.html" class="bg-[#3baad8] px-4 py-1.5 text-white rounded-lg text-[1.1rem]">Search
                            Again</a>
                    </div>
                </div>`;
  }
}

// this condition ensure that the displayFlight fucntion is executed only when user is on the flight.html page
if (window.location.pathname.includes("flights.html")) {
  window.addEventListener("DOMContentLoaded", displayFlights);
}
