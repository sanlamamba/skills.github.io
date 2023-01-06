// Course Slide
const courseSlidesContainer = document.getElementById("course-container");
const mobileBreakpoint = 768;
const courseSlide = document.getElementsByClassName("course-slide");

const coursePrevButton = document.getElementById("course-arrow-prev");

const courseNextButton = document.getElementById("course-arrow-next");
const courseCarousel = {
  curr: 0,
  distance: 25,
  mobileDistance: 100,
};
const actionCourse = courseNextButton.addEventListener("click", () => {
  let curr;
  if (window.innerWidth < mobileBreakpoint) {
    curr =
      courseCarousel.curr + courseCarousel.mobileDistance <
      courseCarousel.mobileDistance * courseSlide.length
        ? courseCarousel.curr + courseCarousel.mobileDistance
        : 0;
  } else {
    curr =
      courseCarousel.curr + courseCarousel.distance <
      courseCarousel.distance * courseSlide.length
        ? courseCarousel.curr + courseCarousel.distance
        : 0;
  }
  courseCarousel.curr = curr;
  courseSlidesContainer.style.transform = `translateX(-${courseCarousel.curr}%)`;
});

coursePrevButton.addEventListener("click", () => {
  const curr =
    courseCarousel.curr - courseCarousel.distance >= 0
      ? courseCarousel.curr - courseCarousel.distance
      : courseCarousel.distance * (courseSlide.length - 1);
  courseCarousel.curr = curr;
  courseSlidesContainer.style.transform = `translateX(-${courseCarousel.curr}%)`;
});

// demo Slide
const demoSlidesContainer = document.getElementById("demo-container");

const demoSlide = document.getElementsByClassName("demo-slide");

const demoPrevButton = document.getElementById("demo-arrow-prev");

const demoNextButton = document.getElementById("demo-arrow-next");
const demoCarousel = {
  curr: 0,
  distance: 25,
  mobileDistance: 100,
};
const demoAction = demoNextButton.addEventListener("click", () => {
  let curr;
  if (window.innerWidth < mobileBreakpoint) {
    curr =
      demoCarousel.curr + demoCarousel.mobileDistance <
      demoCarousel.mobileDistance * demoSlide.length
        ? demoCarousel.curr + demoCarousel.mobileDistance
        : 0;
  } else {
    curr =
      demoCarousel.curr + demoCarousel.distance <
      demoCarousel.distance * demoSlide.length
        ? demoCarousel.curr + demoCarousel.distance
        : 0;
  }
  demoCarousel.curr = curr;
  demoSlidesContainer.style.transform = `translateX(-${demoCarousel.curr}%)`;
});

demoPrevButton.addEventListener("click", () => {
  let curr;
  if (window.innerWidth < mobileBreakpoint) {
    curr =
      demoCarousel.curr - demoCarousel.mobileDistance >= 0
        ? demoCarousel.curr - demoCarousel.mobileDistance
        : demoCarousel.mobileDistance * (demoSlide.length - 1);
  } else {
    curr =
      demoCarousel.curr - demoCarousel.distance >= 0
        ? demoCarousel.curr - demoCarousel.distance
        : demoCarousel.distance * (demoSlide.length - 1);
  }

  demoCarousel.curr = curr;

  demoSlidesContainer.style.transform = `translateX(-${demoCarousel.curr}%)`;
});

// offer Slide
const offerSlidesContainer = document.getElementById("offer-container");

const offerSlide = document.getElementsByClassName("offer-slide");

const offerPrevButton = document.getElementById("offer-arrow-prev");

const offerNextButton = document.getElementById("offer-arrow-next");
const offerCarousel = {
  curr: 0,
  distance: 40,
  mobileDistance: 100,
};
const offerAction = offerNextButton.addEventListener("click", () => {
  let curr;
  if (window.innerWidth < mobileBreakpoint) {
    curr =
      offerCarousel.curr + offerCarousel.mobileDistance <
      offerCarousel.mobileDistance * offerSlide.length
        ? offerCarousel.curr + offerCarousel.mobileDistance
        : 0;
  } else {
    curr =
      offerCarousel.curr + offerCarousel.distance <
      offerCarousel.distance * offerSlide.length
        ? offerCarousel.curr + offerCarousel.distance
        : 0;
  }
  offerCarousel.curr = curr;
  offerSlidesContainer.style.transform = `translateX(-${offerCarousel.curr}%)`;
});

offerPrevButton.addEventListener("click", () => {
  let curr;
  if (window.innerWidth < mobileBreakpoint) {
    curr =
      offerCarousel.curr - offerCarousel.mobileDistance >= 0
        ? offerCarousel.curr - offerCarousel.mobileDistance
        : offerCarousel.mobileDistance * (offerSlide.length - 1);
  } else {
    curr =
      offerCarousel.curr - offerCarousel.distance >= 0
        ? offerCarousel.curr - offerCarousel.distance
        : offerCarousel.distance * (offerSlide.length - 1);
  }
  offerCarousel.curr = curr;
  offerSlidesContainer.style.transform = `translateX(-${offerCarousel.curr}%)`;
});

window.addEventListener("resize", () => {
  courseSlidesContainer.style.transform = `translateX(${0}%)`;
  offerSlidesContainer.style.transform = `translateX(${0}%)`;
  demoSlidesContainer.style.transform = `translateX(${0}%)`;
});
