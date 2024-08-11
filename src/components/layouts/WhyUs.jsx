import React from "react";
import { Card } from "../elements/Card";

export const WhyUs = () => {
  return (
    <div id="kenapakami" className="flex flex-col gap-10 py-20 px-4">
      <h3 className="text-2xl">Kenapa harus pilih Fakanet?</h3>
      <div className="grid grid-cols lg:grid-cols-3 gap-4">
        <Card
          title="Harga Murah"
          description="Harga murah dan bersaing, bisa bandingkan harga kami dengan brand lain"
        />
        <Card
          title="Kustomisasi"
          description="Layanan kami menawarkan fleksibilitas untuk menyesuaikan setiap detail agar sesuai dengan kebutuhan spesifik Anda"
        />
        <Card
          title="Website yang Tanggap dan Instan"
          description="Kami memastikan website Anda responsif dan memuat secara instan di semua perangkat"
        />
      </div>
    </div>
  );
};
