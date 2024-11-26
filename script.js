document.querySelector(".wisata").addEventListener("click", function (event) {
  event.stopPropagation(); // Mencegah event bubbling
  const dropdown = this.querySelector(".dropdown-content");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});

// Sembunyikan dropdown jika area di luar elemen diklik
document.addEventListener("click", function () {
  const dropdown = document.querySelector(".dropdown-content");
  if (dropdown) dropdown.style.display = "none";
});

// Daftar gambar
const images = [
  "./foto_wisata/wisata1.jpeg", // Ganti dengan path gambar Anda
  "./foto_wisata/wisata2.jpeg",
  "./foto_wisata/wisata3.jpeg",
];

// Ambil elemen <img>
const slideshow = document.getElementById("slideshow");

// Indeks awal gambar
let currentIndex = 0;

// Fungsi untuk mengganti gambar
function changeImage() {
  currentIndex = (currentIndex + 1) % images.length; // Update indeks gambar (looping)
  slideshow.src = images[currentIndex]; // Ganti src elemen <img>
}

// Ganti gambar setiap 3 detik
setInterval(changeImage, 3000);

// Data wisata
const wisataData = [
  {
    id: 1,
    name: "Danum Bahandang",
    description:
      "Sebuah destinasi alternatif wisata baru yang masih berada di kawasan Kota Palangka Raya, Kalimantan Tengah kini mulai dilirik masyarakat. Objek wisata tersebut bernama Danum Bahandang, yang terletak di Jalan Tjilik Riwut Kilometer 38, Desa Sungai Gohong, Kecamatan Bukit Batu, Palangka Raya. Untuk menuju objek wisata Danum Bahandang di kawasan Bukit Batu Kanarakan yang berjarak sekitar 38 kilometer dari Kota Palangka Raya hanya membutuhkan waktu kurang dari 1 jam dengan menempuh perjalanan darat. Selain alam yang masih asri, objek wisata Danum Bahandang ini memiliki pesona  bernuansa alam gambut dengan air nya yang mengalir berwarna hitam ke merah-merahan, terdiri dari hamparan pasir putih dan disekelilingnya ditumbuhi pohon-pohon besar sehingga tampak hening dan sejuk.",
    images: [
      "./foto_infoWisata/danumBahandang_foto1.jpg",
      "./foto_infoWisata/danumBahandang_foto2.jpg",
    ],
  },
  {
    id: 2,
    name: "Kereng Bangkirai",
    description:
      "Wisata Air Hitam Kereng Bangkirai merupakan wisata populer yang ada di Kelurahan Sebangau ,Kota Palangka Raya. Tempat wisata ini menyuguhkan keindahan dermaga dengan berbagai fasilitas wahana yang menjadi nilai lebih untuk dapat dinikmati. Wahana tersebut diantaranya adalah sepeda bebek air, gazebo, menara pandang dan susur sungai. Untuk dapat mencapai Kereng Bangkirai , kita hanya perlu menempuh jarak kurang lebih 30 menit dengan menggunakan kendaraan pribadi maupun sewaan. Tiket masuk menuju wisata ini hanya Rp. 5000 per orang dengan tarif masing-masing wahana berkisar Rp. 5000 hingga Rp. 20.000.",
    images: [
      "./foto_infoWisata/kerengBangkirai_foto1.jpg",
      "./foto_infoWisata/kerengBangkirai_foto2.jpg",
    ],
  },
  {
    id: 3,
    name: "Kampung Lauk",
    description:
      "Kampung Lauk Palangka Raya adalah surga bagi para pecinta seafood. Terletak di Kota Palangka Raya, Kalimantan Tengah, tempat ini menyuguhkan berbagai jenis ikan segar yang diolah dengan bumbu-bumbu khas Kalimantan. Nikmati kelezatan ikan bakar dengan bumbu meresap, sembari ditemani kuah sup ikan yang segar dan sambal-sambal yang menggugah selera. Suasana yang nyaman dan harga yang terjangkau membuat Kampung Lauk menjadi pilihan tepat untuk mencicipi hidangan laut autentik. Dengan lokasi yang strategis, Anda dapat dengan mudah menemukan tempat makan yang menyajikan aneka olahan ikan segar ini.",
    images: [
      "./foto_infoWisata/kampungLauk_foto1.jpeg",
      "./foto_infoWisata/kampungLauk_foto2.jpeg",
    ],
  },
  {
    id: 4,
    name: "Saung Rindu Telaga",
    description:
      "Tempat wisata kuliner ini memiliki tempat yang unik dan nyaman. Ada beberapa hal yang menjadikan Saung Rindu Telaga berbeda dengan wisata kuliner lain nya, antara lainya: Wisata terdapat taman mini untuk anak-anak yang berkunjung, kemudian makanan dan penyajian makanan nya yang unik salah satu nya tempat air minum nya seperti kembali ke jaman 90-an, dan yang menjadi ironisnya dari wisata ini adalah memiliki kolam dibawah tempat makan yang memiliki ratusan ikan mas koki dan ikan hias lain nya menjadikan pemandangan lebih indah.",
    images: [
      "./foto_infoWisata/saungRinduTelaga_foto1.jpg",
      "./foto_infoWisata/saungRinduTelaga_foto2.jpg",
    ],
  },
  {
    id: 5,
    name: "Nyaru Menteng",
    description:
      "Arboretum Nyaru Menteng merupakan kawasan hutan yang di dalamnya terdapat spesies flora dan fauna dan kawasan tersebut menjadi kawasan pelestarian plasma nutfah ekosistem hutan rawa, termasuk ke tipe hutan tropika dataran rendah, dengan kondisi tanah berawa dan bergambut. Jenis tanah terdiri dari aluvial, organosol, pasir kuarsa dengan drainase tergenang. Daya tarik Arboretum, yaitu pesona keindahan alam yang berupa hutan tropis dan keanekaragaman flora dan fauna khas Kalimantan Tengah serta tersedia tempat informasi tentang orang utan.",
    images: [
      "./foto_infoWisata/nyaruMenteng_foto1.jpeg",
      "./foto_infoWisata/nyaruMenteng_foto2.jpeg",
    ],
  },
  {
    id: 6,
    name: "Saung Malambai",
    description:
      "Saung Malambai adalah salah satu destinasi kuliner favorit di Palangkaraya yang menawarkan suasana nyaman dan menu beragam. Dengan desain interior yang menarik dan lokasi yang strategis, tempat ini menjadi pilihan sempurna untuk bersantap bersama keluarga atau teman. Selain hidangan utama yang menggugah selera, Saung Malambai juga menyajikan berbagai camilan dan minuman segar. Kepopulerannya semakin meningkat berkat konsep saung-saung unik yang menjadi daya tarik tersendiri. Tak heran jika Saung Malambai kerap dijadikan spot foto yang instagramable. Dengan harga yang terjangkau dan pelayanan yang ramah, Saung Malambai berhasil memikat hati pengunjung dari berbagai kalangan.",
    images: [
      "./foto_infoWisata/saungMalambai_foto1.jpg",
      "./foto_infoWisata/saungMalambai_foto2.jpg",
    ],
  },
  {
    id: 7,
    name: "Kuliner Tempoe Doeloe Serba Kandas",
    description:
      "Kuliner Tempoe Doeloe Serba Kandas adalah salah satu destinasi kuliner di Palangkaraya yang menawarkan cita rasa khas Kalimantan Tengah. Tempat makan ini menyajikan beragam menu tradisional, dengan fokus utama pada olahan ikan dan sambal kandas yang menjadi ciri khasnya. Suasana tempo dulu yang kental terasa begitu memasuki restoran, membuat pengunjung seolah diajak bernostalgia. Menu andalan mereka adalah ikan lais goreng atau ikan saluang yang disajikan dengan sambal kandas yang pedas dan kaya rempah. Selain itu, terdapat pula berbagai pilihan menu lainnya seperti sayur bening, kalakai, dan berbagai jenis olahan ikan lainnya. Bagi pencinta kuliner tradisional, Kuliner Tempoe Doeloe Serba Kandas adalah tempat yang wajib dikunjungi untuk merasakan cita rasa asli Kalimantan Tengah.",
    images: [
      "./foto_infoWisata/serbaKandas_foto1.jpg",
      "./foto_infoWisata/serbaKandas_foto2.jpeg",
    ],
  },
  {
    id: 8,
    name: "Pondok Ikan Cianjur",
    description:
      "Pondok Ikan Cianjur adalah destinasi kuliner favorit di Palangkaraya yang terkenal dengan sajian seafood segarnya. Dengan suasana yang nyaman dan santai, tempat ini cocok untuk bersantap bersama keluarga atau teman. Menu andalan mereka adalah berbagai olahan ikan, seperti gurame, bawal, dan kakap, yang disajikan dengan beragam pilihan bumbu. Selain itu, terdapat juga menu ayam, bebek, dan seafood lainnya. Terutama sate ikan gurame yang wajib dicoba, karena memiliki cita rasa yang khas dan menggugah selera. Dengan harga yang terjangkau dan pelayanan yang ramah, Pondok Ikan Cianjur menjadi tempat makan yang populer di Palangkaraya.",
    images: [
      "./foto_infoWisata/cianjur_foto1.jpeg",
      "./foto_infoWisata/cianjur_foto2.jpg",
    ],
  },
  {
    id: 9,
    name: "Bukit Tangkiling",
    description:
      "Taman Wisata Alam Bukit Tangkiling merupakan salah satu objek wisata alam yang berada di Kota Palangka Raya. Taman Wisata Alam Bukit Tangkiling mencakup seluruh wilayah perbukitan diantaranya Bukit Tangkiling, Bukit Baranahu, Bukit Buhis, Bukit Liau, Bukit Kitabala, Bukit Bulam, Bukit Tisin, Bukit Kalalawit, dan Bukit Tunggal. Daya Tarik wisata Taman Wisata Alam Tangkiling, yaitu ekosistem alam flora dan founa hutan tropis, perbukitan, tanaman herbal/depot obat, kolam buaya, beruang, depot anggrek, panjat tebing, jalan refleksi, tracking hutan, dan pohon yang dilindungi (tengkawang, ulin), dan lebah madu.",
    images: [
      "./foto_infoWisata/bukitTangkiling_foto1.jpg",
      "./foto_infoWisata/bukitTangkiling_foto2.jpg",
    ],
  },
  {
    id: 10,
    name: "Danau Tahai",
    description:
      "Danau Tahai, dengan warna airnya yang kemerahan khas dan suasana yang tenang, menawarkan pengalaman wisata yang tak terlupakan. Pengunjung dapat menikmati keindahan alam, mencoba berbagai aktivitas wisata, atau sekadar bersantai di tepi danau. Namun, potensi wisata Danau Tahai masih belum tergarap secara maksimal. Dengan pengembangan infrastruktur dan fasilitas yang lebih baik, serta upaya pelestarian lingkungan, Danau Tahai dapat menjadi salah satu destinasi wisata unggulan di Kalimantan Tengah.",
    images: [
      "./foto_infoWisata/danauTahai_foto1.jpg",
      "./foto_infoWisata/danauTahai_foto2.jpeg",
    ],
  },
  {
    id: 11,
    name: "Rumah Makan Samba (masakan khas Kalteng)",
    description:
      "Rumah Makan Samba adalah destinasi kuliner wajib bagi siapa saja yang berkunjung ke Palangkaraya. Menu-menu yang disajikan merupakan perpaduan sempurna antara cita rasa tradisional Dayak dengan sentuhan modern. Salah satu menu andalannya adalah ikan patin bakar yang diolah dengan bumbu khas Kalimantan Tengah. Selain itu, terdapat pula berbagai pilihan menu lainnya seperti sayur bening, manok pansoh, dan juhu sangrai. Dengan pelayanan yang ramah dan profesional.",
    images: [
      "./foto_infoWisata/samba_foto1.jpeg",
      "./foto_infoWisata/samba_foto2.jpg",
    ],
  },
  {
    id: 12,
    name: "Taman Pasuk Kameloh",
    description:
      "Taman Pasuk Kameloh adalah taman kota yang menjadi favorit warga Palangkaraya. Dengan suasana yang sejuk dan rindang, taman ini menawarkan berbagai fasilitas seperti tempat parkir, toilet umum, dan masjid. Keunikan taman ini terletak pada keberadaan patung-patung yang menggambarkan kehidupan masyarakat Kalimantan Tengah. Lokasinya yang strategis di sepanjang Jalan S. Parman membuat taman ini mudah diakses oleh masyarakat. Taman Pasuk Kameloh adalah tempat yang ideal untuk bersantai, berolahraga, atau sekadar menikmati suasana hijau di tengah kota.",
    images: [
      "./foto_infoWisata/pasukKameloh_foto1.jpeg",
      "./foto_infoWisata/pasukKameloh_foto2.jpg",
    ],
  },
];

// Ambil elemen modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");
const closeModal = document.querySelector(".close");

// Fungsi untuk membuka modal dengan konten tertentu
function openModal(wisataId) {
  const wisata = wisataData.find((item) => item.id === wisataId);

  // Update judul dan deskripsi
  modalTitle.textContent = wisata.name;
  modalDescription.textContent = wisata.description;

  // Bersihkan gambar sebelumnya
  const modalImagesContainer = document.getElementById("modal-images");
  modalImagesContainer.innerHTML = "";

  // Tambahkan gambar baru
  wisata.images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Foto Wisata";
    modalImagesContainer.appendChild(img);
  });

  modal.style.display = "flex"; // Tampilkan modal
}

// Fungsi untuk menutup modal
closeModal.onclick = function () {
  modal.style.display = "none";
};

// Menutup modal saat klik di luar modal
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Tambahkan event listener ke card
document.querySelectorAll(".card").forEach((card, index) => {
  card.addEventListener("click", () => openModal(index + 1));
});

// Fungsi untuk mencari wisata
function filterSearch() {
  const input = document.getElementById("searchInput");
  const filter = input.value.toLowerCase(); // Konversi ke huruf kecil untuk pencarian yang tidak case-sensitive
  const cards = document.querySelectorAll(".card"); // Ambil semua elemen dengan class "card"

  cards.forEach((card) => {
    // Gabungkan semua teks yang relevan di dalam kartu untuk pencarian
    const title = card.querySelector("h3").textContent.toLowerCase();
    const category = card.querySelector("span").textContent.toLowerCase();

    // Cek apakah input pengguna ada di salah satu bagian kartu
    if (title.includes(filter) || category.includes(filter)) {
      card.style.display = "block"; // Tampilkan kartu jika cocok
    } else {
      card.style.display = "none"; // Sembunyikan kartu jika tidak cocok
    }
  });
}

// filtering
function filterCategory(category) {
  const cards = document.querySelectorAll(".card");
  const container = document.querySelector(".wisata-container");

  // Buat array untuk elemen yang cocok dan tidak cocok
  const matchingCards = [];
  const nonMatchingCards = [];

  // Pisahkan elemen berdasarkan kategori
  cards.forEach((card) => {
    if (card.getAttribute("data-category") === category) {
      matchingCards.push(card);
    } else {
      nonMatchingCards.push(card);
    }
  });

  // Hapus semua elemen dalam container
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Tambahkan elemen yang cocok terlebih dahulu
  matchingCards.forEach((card) => {
    container.appendChild(card);
    card.style.display = "block"; // Tampilkan kartu yang cocok
  });

  // Tambahkan elemen yang tidak cocok di belakang
  nonMatchingCards.forEach((card) => {
    container.appendChild(card);
    card.style.display = "none"; // Sembunyikan kartu yang tidak cocok
  });
}
