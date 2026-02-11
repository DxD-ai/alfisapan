// ambil parameter URL
const params = new URLSearchParams(window.location.search);
const artikel = params.get("artikel");

// database artikel
const artikelData = {
  udara: {
    judul: "Dampak Pembakaran Sampah Sembarangan terhadap Kualitas Udara dan Kehidupan",
    gambar: "assets/udara.jpeg",
    isi: `
<p>
Pembakaran sampah sembarangan merupakan salah satu penyebab utama pencemaran udara yang sering
terjadi di lingkungan masyarakat, baik di perkotaan maupun pedesaan. Kebiasaan ini masih
banyak dilakukan karena dianggap sebagai cara paling mudah untuk menghilangkan sampah.
Padahal, asap hasil pembakaran sampah mengandung berbagai zat berbahaya seperti karbon
monoksida, karbon dioksida, sulfur dioksida, dan partikel halus yang sangat berbahaya bagi
kesehatan manusia dan lingkungan.
</p>

<p>
Zat berbahaya yang dihasilkan dari pembakaran sampah dapat masuk ke dalam sistem pernapasan
manusia. Paparan asap secara terus-menerus dapat menyebabkan gangguan kesehatan seperti batuk,
iritasi mata, sesak napas, hingga penyakit kronis seperti asma dan infeksi paru-paru. Anak-anak,
lansia, dan orang dengan daya tahan tubuh rendah merupakan kelompok yang paling rentan
terhadap dampak pencemaran udara ini.
</p>

<p>
Selain berdampak pada kesehatan manusia, pembakaran sampah juga merusak lingkungan. Asap tebal
dapat mengurangi kualitas udara dan menurunkan jarak pandang. Gas berbahaya yang dilepaskan
ke udara juga berkontribusi terhadap pemanasan global dan perubahan iklim. Tanaman di sekitar
area pembakaran dapat terganggu proses fotosintesisnya akibat tertutup asap dan partikel
beracun.
</p>

<p>
Pembakaran sampah plastik merupakan jenis yang paling berbahaya karena menghasilkan zat
beracun seperti dioksin. Zat ini dapat mencemari udara, tanah, dan bahkan masuk ke dalam rantai
makanan. Jika dibiarkan terus-menerus, pencemaran udara akibat pembakaran sampah dapat
menurunkan kualitas hidup masyarakat dan merusak keseimbangan ekosistem.
</p>

<p>
Upaya pencegahan pencemaran udara akibat pembakaran sampah dapat dilakukan dengan mengelola
sampah secara bijak. Masyarakat perlu melakukan pemilahan sampah organik dan anorganik,
menerapkan prinsip daur ulang, serta membuang sampah pada tempat yang telah disediakan.
Pemerintah juga berperan penting dalam menyediakan fasilitas pengelolaan sampah dan
memberikan edukasi kepada masyarakat.
</p>

<p>
Dengan menghentikan kebiasaan membakar sampah sembarangan, kualitas udara dapat terjaga dan
kesehatan masyarakat menjadi lebih baik. Kesadaran bersama sangat dibutuhkan agar lingkungan
tetap bersih, sehat, dan layak huni bagi generasi sekarang maupun yang akan datang.
</p>
`
  },

  air: {
    judul: "Dampak Pencemaran Sungai terhadap Kehidupan Makhluk Hidup",
    gambar: "assets/air.jpeg",
    isi: `
<p>
Sungai merupakan salah satu sumber air yang sangat penting bagi kehidupan manusia, hewan, dan
tumbuhan. Sungai digunakan untuk kebutuhan sehari-hari seperti mandi, mencuci, irigasi
pertanian, hingga sumber air minum. Namun, saat ini banyak sungai yang mengalami pencemaran
akibat aktivitas manusia yang tidak bertanggung jawab.
</p>

<p>
Pencemaran sungai umumnya disebabkan oleh limbah rumah tangga, limbah industri, serta sampah
yang dibuang langsung ke aliran sungai. Limbah tersebut mengandung zat kimia berbahaya,
bakteri, dan bahan organik yang dapat menurunkan kualitas air. Air sungai yang tercemar
biasanya berwarna keruh, berbau tidak sedap, dan tidak layak digunakan.
</p>

<p>
Dampak pencemaran sungai sangat dirasakan oleh makhluk hidup yang berada di dalamnya. Ikan dan
organisme air lainnya dapat mati akibat kekurangan oksigen atau keracunan zat berbahaya.
Rusaknya ekosistem sungai juga mengganggu rantai makanan dan keseimbangan lingkungan air.
</p>

<p>
Selain berdampak pada lingkungan, pencemaran sungai juga berbahaya bagi kesehatan manusia.
Penggunaan air sungai yang tercemar dapat menyebabkan berbagai penyakit seperti diare,
tifus, penyakit kulit, dan keracunan. Air yang tercemar juga dapat meresap ke dalam tanah dan
mencemari air sumur yang digunakan oleh masyarakat sekitar.
</p>

<p>
Upaya pencegahan pencemaran sungai dapat dilakukan dengan mengelola limbah dengan baik sebelum
dibuang ke lingkungan. Masyarakat perlu membiasakan diri untuk tidak membuang sampah ke
sungai serta melakukan kegiatan gotong royong membersihkan lingkungan. Industri juga wajib
mengolah limbahnya sesuai dengan aturan yang berlaku.
</p>

<p>
Dengan menjaga kebersihan sungai, kelestarian lingkungan air dapat terjaga dan kebutuhan air
bersih masyarakat tetap terpenuhi. Sungai yang bersih mencerminkan perilaku masyarakat yang
peduli terhadap lingkungan dan masa depan bersama.
</p>
`
  },

  tanah: {
    judul: "Dampak Pencemaran Tanah terhadap Pertanian dan Kehidupan",
    gambar: "assets/tanah.jpeg",
    isi: `
<p>
Pencemaran tanah merupakan kondisi di mana tanah tercemar oleh zat berbahaya akibat aktivitas
manusia. Tanah memiliki peran penting sebagai tempat tumbuh tanaman, sumber pangan, dan
penunjang kehidupan makhluk hidup. Namun, pencemaran tanah sering terjadi akibat pembuangan
sampah dan limbah secara sembarangan.
</p>

<p>
Sumber pencemaran tanah berasal dari sampah plastik, limbah industri, limbah elektronik, serta
penggunaan pupuk dan pestisida kimia secara berlebihan. Zat-zat berbahaya tersebut dapat
meresap ke dalam tanah dan merusak struktur serta kesuburannya. Tanah yang tercemar menjadi
tidak subur dan sulit ditanami.
</p>

<p>
Dampak pencemaran tanah sangat dirasakan di bidang pertanian. Tanaman yang tumbuh di tanah
tercemar dapat menyerap zat berbahaya dan menghasilkan panen yang tidak sehat. Jika
dikonsumsi manusia atau hewan, zat tersebut dapat menimbulkan gangguan kesehatan dalam jangka
panjang.
</p>

<p>
Selain itu, pencemaran tanah juga berdampak pada organisme yang hidup di dalam tanah seperti
cacing dan mikroorganisme. Padahal, organisme tersebut berperan penting dalam menjaga
kesuburan tanah. Hilangnya organisme tanah menyebabkan keseimbangan ekosistem terganggu dan
memperparah kerusakan lingkungan.
</p>

<p>
Upaya pencegahan pencemaran tanah dapat dilakukan dengan pengelolaan sampah yang baik, seperti
memilah sampah organik dan anorganik serta melakukan daur ulang. Penggunaan pupuk organik dan
pestisida alami juga dapat mengurangi risiko pencemaran tanah. Limbah berbahaya harus dibuang
di tempat khusus yang telah disediakan.
</p>

<p>
Dengan menjaga tanah tetap bersih dan subur, keberlangsungan pertanian dan kesehatan
lingkungan dapat terjaga. Kesadaran masyarakat dalam menjaga tanah sangat penting demi
kelestarian lingkungan dan kehidupan generasi mendatang.
</p>
`
  }
};

// tampilkan artikel sesuai parameter
if (artikelData[artikel]) {
  document.getElementById("judul").innerText = artikelData[artikel].judul;
  document.getElementById("gambar").src = artikelData[artikel].gambar;
  document.getElementById("isi").innerHTML = artikelData[artikel].isi;
} else {
  document.getElementById("judul").innerText = "Artikel tidak ditemukan";
  document.getElementById("isi").innerHTML = "<p>Artikel tidak tersedia.</p>";
}