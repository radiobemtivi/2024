$(document).ready(function () {
    let activeElement = (selector) => {
      for (let index = 0, comp = selector.length; index < comp; index++) {
        let element = selector[index];
        if (element.classList.contains("actives")) {
          return element;
        }
      }
    };
    const dAnimate = (me, action, duration, flex = false) => {
      let displayPropShow = "";
      if (flex) displayPropShow = "flex";
      else displayPropShow = "block";
      switch (action) {
        case "show":
          me.style.cssText =
            "display: " +
            displayPropShow +
            "; transition: opacity .4s; opacity: 0";
          setTimeout(() => {
            me.style.cssText += "opacity: 1;";
          }, duration);
          break;
        case "hide":
          me.style.cssText =
            "display:" +
            displayPropShow +
            ";transition: opacity .4s; opacity: 0;";
          setTimeout(() => {
            me.style.cssText += "display:none;";
          }, duration);
          break;
        default:
          break;
      }
    };
    let days = document.querySelectorAll("#guide .days .day");
    days.forEach((element) => {
      element.addEventListener("click", (e) => {
        if (!(element === activeElement(days)) && activeElement(days)) {
          activeElement(days).classList.remove("actives");
          e.target.classList.add("actives");
          let descItems = document.querySelectorAll("#guide .details div");
          let desc = document.getElementById(e.target.dataset.day);
          if (!desc.classList.contains("actives")) {
            let x = activeElement(descItems);
            dAnimate(x, "hide", 5);
            x.classList.remove("actives");
            setTimeout(() => {
              desc.classList.add("actives");
              dAnimate(desc, "show", 200);
              10;
            });
          }
        }
      });
    }); 
  });
  