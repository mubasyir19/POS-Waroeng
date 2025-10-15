import { formatPrice } from "@/helpers/formatPrice";
import { Banknote, Landmark, QrCode, Smartphone } from "lucide-react";
import React, { useEffect, useState } from "react";

interface PaymentProps {
  orderId: string;
  onCancel: () => void;
}

export default function Payment({ onCancel }: PaymentProps) {
  const [paymentMethod, setPaymentMethod] = useState<string>("Cash");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`bg-background absolute top-0 right-0 h-screen w-1/2 border-r-2 border-gray-700 p-6 transition-all duration-700 ease-in-out ${visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
    >
      <h3 className="text-xl font-semibold text-white">Pembayaran</h3>
      <p className="text-text-light mt-2 text-sm font-medium">
        4 Payment method available
      </p>
      <hr className="my-4 border border-gray-700" />
      <h3 className="text-lg font-semibold text-white">Metode Pembayaran</h3>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setPaymentMethod("Cash")}
          className={`rounded-lg border-2 px-4 py-2.5 ${paymentMethod === "Cash" ? "border-white" : "border-gray-700"}`}
        >
          <Banknote
            className={`mx-auto size-7 ${paymentMethod === "Cash" ? "text-white" : "text-text-light"}`}
          />
          <p
            className={`mt-1 text-center text-base font-medium ${paymentMethod === "Credit" ? "text-white" : "text-text-light"}`}
          >
            Cash
          </p>
        </button>
        <button
          type="button"
          onClick={() => setPaymentMethod("Qris")}
          className={`rounded-lg border-2 px-4 py-2.5 ${paymentMethod === "Qris" ? "border-white" : "border-gray-700"}`}
        >
          <QrCode
            className={`mx-auto size-7 ${paymentMethod === "Qris" ? "text-white" : "text-text-light"}`}
          />
          <p
            className={`mt-1 text-center text-base font-medium ${paymentMethod === "Qris" ? "text-white" : "text-text-light"}`}
          >
            QRIS
          </p>
        </button>
        <button
          type="button"
          onClick={() => setPaymentMethod("Transfer")}
          className={`rounded-lg border-2 px-4 py-2.5 ${paymentMethod === "Transfer" ? "border-white" : "border-gray-700"}`}
        >
          <Landmark
            className={`mx-auto size-7 ${paymentMethod === "Transfer" ? "text-white" : "text-text-light"}`}
          />
          <p
            className={`mt-1 text-center text-base font-medium ${paymentMethod === "Transfer" ? "text-white" : "text-text-light"}`}
          >
            Transfer
          </p>
        </button>
        <button
          type="button"
          onClick={() => setPaymentMethod("E-Wallet")}
          className={`rounded-lg border-2 px-4 py-2.5 ${paymentMethod === "E-Wallet" ? "border-white" : "border-gray-700"}`}
        >
          <Smartphone
            className={`mx-auto size-7 ${paymentMethod === "E-Wallet" ? "text-white" : "text-text-light"}`}
          />
          <p
            className={`mt-1 text-center text-base font-medium ${paymentMethod === "E-Wallet" ? "text-white" : "text-text-light"}`}
          >
            E-Wallet
          </p>
        </button>
      </div>
      <div className="mt-6">
        {paymentMethod === "Cash" && (
          <div className="">
            <div className="flex items-center justify-between">
              <p className="text-text-light text-sm">Total Bayar</p>
              <p className="text-base font-medium text-white">
                {formatPrice(0)}
              </p>
            </div>
            <div className="my-2">
              <label className="text-text-light text-sm">Uang Diterima</label>
              <input
                type="number"
                placeholder="Masukkan Nominal"
                className="mt-1.5 w-full rounded-md bg-gray-800 px-3 py-2 text-sm text-gray-200 placeholder-gray-500 outline-none"
              />
            </div>
            <div className="flex justify-between text-green-400">
              <span>Kembalian:</span>
              <span>{formatPrice(5000)}</span>
            </div>
            <div className="mt-10 flex items-stretch gap-4">
              <button
                onClick={onCancel}
                className="border-primary text-primary w-full cursor-pointer rounded-md border bg-transparent py-1.5 text-center font-medium"
              >
                Cancel
              </button>
              <button className="bg-primary/80 hover:bg-primary w-full cursor-pointer rounded-md py-1.5 text-center font-medium text-white">
                Selesaikan Pembayaran
              </button>
            </div>
          </div>
        )}
        {paymentMethod === "Qris" && (
          <div className="">
            <p className="text-white">Silakan scan qrcode berikut</p>
            <div className="mt-2">
              <div className="mx-auto size-52 bg-gray-500"></div>
            </div>
            <div className="mt-10 flex items-stretch gap-4">
              <button
                onClick={onCancel}
                className="border-primary text-primary w-full cursor-pointer rounded-md border bg-transparent py-1.5 text-center font-medium"
              >
                Cancel
              </button>
              <button className="bg-primary/80 hover:bg-primary w-full cursor-pointer rounded-md py-1.5 text-center font-medium text-white">
                Tandai Selesai
              </button>
            </div>
          </div>
        )}
        {paymentMethod === "Transfer" && (
          <div className="">
            <div className="mt-2">
              <label className="text-text-light text-sm">Bank Tujuan:</label>
              <select
                name=""
                id=""
                className="border-text-light bg-background mt-1.5 w-full rounded-md border px-4 py-2 text-white outline-none"
              >
                <option value="" className="text-sm text-white">
                  Pilih Bank
                </option>
                <option value="BCA" className="text-sm text-white">
                  BCA
                </option>
                <option value="BRI" className="text-sm text-white">
                  BRI
                </option>
                <option value="Mandiri" className="text-sm text-white">
                  Mandiri
                </option>
                <option value="BSI" className="text-sm text-white">
                  BSI
                </option>
              </select>
            </div>
            <div className="mt-2">
              <label className="text-text-light text-sm">Nama Pengirim</label>
              <input
                type="text"
                placeholder="Masukkan nama pengirim"
                className="mt-1.5 w-full rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm text-gray-200 placeholder-gray-500 outline-none focus:border-white"
              />
            </div>
            <div className="mt-2">
              <label className="text-text-light text-sm">Nomor Referensi</label>
              <input
                type="text"
                placeholder="Masukkan nomor referensi"
                className="mt-1.5 w-full rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm text-gray-200 placeholder-gray-500 outline-none focus:border-white"
              />
            </div>
            <div className="mt-10 flex items-stretch gap-4">
              <button
                onClick={onCancel}
                className="border-primary text-primary w-full cursor-pointer rounded-md border bg-transparent py-1.5 text-center font-medium"
              >
                Cancel
              </button>
              <button className="bg-primary/80 hover:bg-primary w-full cursor-pointer rounded-md py-1.5 text-center font-medium text-white">
                Selesaikan Pembayaran
              </button>
            </div>
          </div>
        )}
        {paymentMethod === "E-Wallet" && (
          <div className="">
            <div className="mt-2">
              <label className="text-text-light text-sm">Pilih E-Wallet:</label>
              <select
                name=""
                id=""
                className="border-text-light bg-background mt-1.5 w-full rounded-md border px-4 py-2 text-white outline-none"
              >
                <option value="Gopay" className="text-sm text-white">
                  Gopay
                </option>
                <option value="OVO" className="text-sm text-white">
                  OVO
                </option>
                <option value="Dana" className="text-sm text-white">
                  Dana
                </option>
                <option value="ShopeePay" className="text-sm text-white">
                  ShopeePay
                </option>
              </select>
            </div>
            <div className="mt-2">
              <label className="text-text-light text-sm">
                Nomor HP Customer:
              </label>
              <input
                type="text"
                placeholder="Masukkan nomor hp"
                className="mt-1.5 w-full rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm text-gray-200 placeholder-gray-500 outline-none focus:border-white"
              />
            </div>
            <div className="mt-10 flex items-stretch gap-4">
              <button
                onClick={onCancel}
                className="border-primary text-primary w-full cursor-pointer rounded-md border bg-transparent py-1.5 text-center font-medium"
              >
                Cancel
              </button>
              <button className="bg-primary/80 hover:bg-primary w-full cursor-pointer rounded-md py-1.5 text-center font-medium text-white">
                Selesaikan Pembayaran
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
