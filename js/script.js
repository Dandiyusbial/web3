
// hambueger menu
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener ('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
    
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');

}


// klik di luar modal berlaku semua modal
window.onclick = (e) => {
  
    if (e.target === itemDetailModal && itemDetailModal.style.display === "flex") {
      itemDetailModal.style.display = "none";
    }
    if (e.target === itemDetailModal2 && itemDetailModal2.style.display === "flex") {
      itemDetailModal2.style.display = "none";
    }
    if (e.target === itemDetailModal3 && itemDetailModal3.style.display === "flex") {
      itemDetailModal3.style.display = "none";
    }
    if (e.target === itemDetailModal4 && itemDetailModal4.style.display === "flex") {
      itemDetailModal4.style.display = "none";
    }
    if (e.target === itemDetailModal5 && itemDetailModal5.style.display === "flex") {
      itemDetailModal5.style.display = "none";
    }
    if (e.target === itemDetailModal6 && itemDetailModal6.style.display === "flex") {
      itemDetailModal6.style.display = "none";
    }
    if (e.target === itemDetailModal7 && itemDetailModal7.style.display === "flex") {
      itemDetailModal7.style.display = "none";
    }
    if (e.target === itemDetailModal8 && itemDetailModal8.style.display === "flex") {
      itemDetailModal8.style.display = "none";
    }
    if (e.target === itemDetailModal9 && itemDetailModal9.style.display === "flex") {
      itemDetailModal9.style.display = "none";
    }
    if (e.target === itemDetailModal10 && itemDetailModal10.style.display === "flex") {
      itemDetailModal10.style.display = "none";
    }
  };




  // Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");


itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close pada Modal
document.querySelector("#item-detail-modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};
document.querySelector("#item-detail-modal .button-back").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// kilk di luar modal dari pak dika

// window.onclick = (e) => {
//   if (e.target === itemDetailModal) {
//     itemDetailModal.style.display = "none";
//   }
// };



// Modal Box 2
const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const itemDetailButton2 = document.querySelectorAll(".item-detail-button2");


itemDetailButton2.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal2.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close pada Modal
document.querySelector("#item-detail-modal2 .close-icon").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};
document.querySelector("#item-detail-modal2 .button-back").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};


// Modal Box 3
const itemDetailModal3 = document.querySelector("#item-detail-modal3");
const itemDetailButton3 = document.querySelectorAll(".item-detail-button3");


itemDetailButton3.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal3.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close pada Modal
document.querySelector("#item-detail-modal3 .close-icon").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};
document.querySelector("#item-detail-modal3 .button-back").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};




// Modal Box 4
const itemDetailModal4 = document.querySelector("#item-detail-modal4");
const itemDetailButton4 = document.querySelectorAll(".item-detail-button4");


itemDetailButton4.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal4.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close pada Modal
document.querySelector("#item-detail-modal4 .close-icon").onclick = (e) => {
  itemDetailModal4.style.display = "none";
  e.preventDefault();
};
document.querySelector("#item-detail-modal4 .button-back").onclick = (e) => {
  itemDetailModal4.style.display = "none";
  e.preventDefault();
};


// Modal Box 5
const itemDetailModal5 = document.querySelector("#item-detail-modal5");
const itemDetailButton5 = document.querySelectorAll(".item-detail-button5");


itemDetailButton5.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal5.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close pada Modal
document.querySelector("#item-detail-modal5 .close-icon").onclick = (e) => {
  itemDetailModal5.style.display = "none";
  e.preventDefault();
};
document.querySelector("#item-detail-modal5 .button-back").onclick = (e) => {
  itemDetailModal5.style.display = "none";
  e.preventDefault();
};

// Modal Box 6
const itemDetailModal6 = document.querySelector("#item-detail-modal6");
const itemDetailButton6 = document.querySelectorAll(".item-detail-button6");


itemDetailButton6.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal6.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close pada Modal
document.querySelector("#item-detail-modal6 .close-icon").onclick = (e) => {
  itemDetailModal6.style.display = "none";
  e.preventDefault();
};
document.querySelector("#item-detail-modal6 .button-back").onclick = (e) => {
  itemDetailModal6.style.display = "none";
  e.preventDefault();
};
// Modal Box 7
const itemDetailModal7 = document.querySelector("#item-detail-modal7");
const itemDetailButton7 = document.querySelectorAll(".item-detail-button7");


itemDetailButton7.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal7.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close pada Modal
document.querySelector("#item-detail-modal7 .close-icon").onclick = (e) => {
  itemDetailModal7.style.display = "none";
  e.preventDefault();
};
document.querySelector("#item-detail-modal7 .button-back").onclick = (e) => {
  itemDetailModal7.style.display = "none";
  e.preventDefault();
};
// Modal Box 8
const itemDetailModal8 = document.querySelector("#item-detail-modal8");
const itemDetailButton8 = document.querySelectorAll(".item-detail-button8");


itemDetailButton8.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal8.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close pada Modal
document.querySelector("#item-detail-modal8 .close-icon").onclick = (e) => {
  itemDetailModal8.style.display = "none";
  e.preventDefault();
};
document.querySelector("#item-detail-modal8 .button-back").onclick = (e) => {
  itemDetailModal8.style.display = "none";
  e.preventDefault();
};
// Modal Box 9
const itemDetailModal9 = document.querySelector("#item-detail-modal9");
const itemDetailButton9 = document.querySelectorAll(".item-detail-button9");


itemDetailButton9.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal9.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close pada Modal
document.querySelector("#item-detail-modal9 .close-icon").onclick = (e) => {
  itemDetailModal9.style.display = "none";
  e.preventDefault();
};
document.querySelector("#item-detail-modal9 .button-back").onclick = (e) => {
  itemDetailModal9.style.display = "none";
  e.preventDefault();
};
// Modal Box 10
const itemDetailModal10 = document.querySelector("#item-detail-modal10");
const itemDetailButton10 = document.querySelectorAll(".item-detail-button10");


itemDetailButton10.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal10.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close pada Modal
document.querySelector("#item-detail-modal10 .close-icon").onclick = (e) => {
  itemDetailModal10.style.display = "none";
  e.preventDefault();
};
document.querySelector("#item-detail-modal10 .button-back").onclick = (e) => {
  itemDetailModal10.style.display = "none";
  e.preventDefault();
};



