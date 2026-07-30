# Kost Ibu Rahmi — Redesign Package

Paket ini berisi file yang perlu menggantikan file dengan path sama pada repository `newbieot/kostiburahmi`.

## File implementasi

- `index.html` — homepage baru, SEO, schema, aksesibilitas, dan struktur yang diringkas.
- `flyer.html` — flyer digital tetap 1080 × 1350 dengan foto VIP asli dan dua QR terpisah.
- `assets/css/site.css` — desain responsif navy/cream/emas/hijau, grid galeri teratur, focus state, reduced motion.
- `assets/js/site.js` — navigasi mobile dan lightbox ringan.
- `assets/images/qr-whatsapp.png` — QR programatis untuk URL persis `https://wa.me/6282160600763`.
- `assets/images/qr-google-maps.png` — QR programatis untuk URL persis `https://maps.app.goo.gl/Gx7gHEeugVkciWht6`.
- `robots.txt` dan `sitemap.xml` — SEO crawling dan internal URL yang diperbarui.

Foto properti tidak disertakan karena tetap memakai foto VIP asli yang sudah ada di repository.

## Perintah Git manual bila koneksi GitHub belum mendapat izin tulis

```bash
git checkout main
git pull --ff-only
git checkout -b redesign-homepage-flyer
# Ekstrak paket ini ke root repository, lalu:
git add index.html flyer.html assets/css/site.css assets/js/site.js \
  assets/images/qr-whatsapp.png assets/images/qr-google-maps.png robots.txt sitemap.xml
git commit -m "Redesign homepage and digital flyer"
git push -u origin redesign-homepage-flyer
```

Kemudian buat Pull Request dari `redesign-homepage-flyer` menuju `main`.

## Hasil QA

- Breakpoint diperiksa: 360, 430, 768, dan 1440 px.
- Tidak ditemukan horizontal overflow pada empat breakpoint.
- Tidak ditemukan page error atau console error pada render lokal.
- Flyer dirender tepat 1080 × 1350.
- Dua QR berhasil didecode sekaligus dari screenshot flyer utuh.
