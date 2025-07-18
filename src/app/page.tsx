import Image from "next/image";
import { PiQrCodeLight } from "react-icons/pi";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shadow-sm">
                  {/* <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg> */}
                  <PiQrCodeLight className="w-7 h-7 text-blue-600" />
                </div>
                <span className="text-2xl font-extrabold text-gray-900 tracking-tight">Hanipop</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-12">
              <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors">Ana Sayfa</a>
              <a href="#features" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors">Özellikler</a>
              <a href="#pricing" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors">Fiyatlandırma</a>
              <a href="#contact" className="text-gray-500 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors">İletişim</a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="https://menu.hanipop.com" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-base font-semibold shadow transition-colors">Giriş Yap</a>
              {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-base font-semibold shadow transition-colors">Demo Talep Et</button> */}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Bölümü */}
      <section id="features" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 flex flex-col lg:flex-row items-center gap-12 relative">
          {/* Sol: Metin */}
          <div className="flex-1 max-w-xl">
            <p className="text-blue-600 font-semibold mb-3 text-lg">QR Menü Satışı</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-700 leading-tight mb-6 tracking-tight">
              Hanipop ile Dijital Menü Deneyimi
            </h1>
            <p className="text-xl text-gray-500 mb-10">Restoranınız, kafeniz veya oteliniz için modern, hızlı ve çok dilli QR menü çözümü. Müşterileriniz menünüze anında erişsin, siz kolayca yönetin!</p>
            <div className="flex gap-4">
              <a href="https://qrmenu.hanipop.com/?url=Kodlooper-cafe" target="_blank" className="flex items-center gap-2 bg-blue-600 shadow-lg border border-blue-600 rounded-xl px-6 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm4 2h2v2H9V7zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-8h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z"/></svg>
                QR Menü Demo
              </a>
              <button className="flex items-center gap-2 bg-white shadow-lg border border-gray-200 rounded-xl px-6 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-100 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                Çoklu Dil Desteği
              </button>
            </div>
          </div>
          {/* Sağ: QR Menü Mockup */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-blue-100 rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute bottom-0 -right-10 w-24 h-24 bg-yellow-100 rounded-full opacity-30 blur-2xl"></div>
            <div className="relative z-10">
              <div className="w-100 h-[520px] flex flex-col items-center justify-center overflow-hidden">
                <Image src="/qr-menu.png" alt="QR Menü Mockup" className="w-full h-full object-contain" width={420} height={520} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Features Bölümü */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center gap-16">
          {/* Sol: Metin ve Özellikler */}
          <div className="flex-1">
            <p className="text-blue-600 font-semibold mb-3 text-lg">Özellikler</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-700 mb-6 leading-tight">Hanipop ile Neler Mümkün?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 text-2xl shadow-sm">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104.896-2 2-2s2 .896 2 2-.896 2-2 2-2-.896-2-2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19c-4.418 0-8-1.79-8-4V7c0-2.21 3.582-4 8-4s8 1.79 8 4v8c0 2.21-3.582 4-8 4z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-700">Çoklu Dil Desteği</h3>
                  <p className="text-gray-500">Menünüzü istediğiniz kadar dilde yayınlayın, yabancı müşterileriniz de kolayca sipariş versin.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600 text-2xl shadow-sm">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-700">Kolay Yönetim Paneli</h3>
                  <p className="text-gray-500">Ürünlerinizi, fiyatlarınızı ve kategorilerinizi tek panelden kolayca yönetin.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600 text-2xl shadow-sm">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-700">Hızlı Kurulum</h3>
                  <p className="text-gray-500">Dakikalar içinde menünüzü oluşturun, QR kodunuzu alın ve kullanmaya başlayın.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 text-2xl shadow-sm">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-gray-700">Müşteri Dostu Arayüz</h3>
                  <p className="text-gray-500">Her cihazda kolayca görüntülenebilen, sade ve modern menü tasarımı.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Sağ: QR Menü Mockup */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative z-10">
              <div className="w-100 h-[520px]   flex flex-col items-center justify-center overflow-hidden">
                <Image src="/qr-menu.png" alt="QR Menü Mockup" className="w-full h-full object-contain" width={420} height={520} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table Bölümü */}
      <section id="pricing" className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">QR Menü Paketleri</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">İşletmenizin ihtiyacına uygun QR menü paketini seçin, hemen kullanmaya başlayın!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Başlangıç Paketi */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Başlangıç</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₺1.999 <span className="text-base font-medium text-gray-500">yıllık</span></div>
              <p className="text-gray-500 mb-6">Küçük kafeler ve yeni başlayan işletmeler için ideal.</p>
              <ul className="mb-6 space-y-2 text-sm text-gray-600">
                <li>✓ 1 Dil Desteği (Türkçe)</li>
                <li>✓ 50 Ürün Kapasitesi</li>
                <li>✓ Temel QR Kod</li>
                <li>✓ 1 Yıl Teknik Destek</li>
                <li>✓ Mobil Uyumlu Tasarım</li>
              </ul>
              {/* <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">Satın Al</button> */}
            </div>
            {/* Profesyonel Paket */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-600 flex flex-col scale-105 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">En Popüler</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Profesyonel</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₺3.500 <span className="text-base font-medium text-gray-500">tek seferlik</span></div>
              <p className="text-gray-500 mb-6">Orta ölçekli restoranlar ve kafeler için mükemmel.</p>
              <ul className="mb-6 space-y-2 text-sm text-gray-600">
                <li>✓ 3 Dil Desteği (TR, EN, RU)</li>
                <li>✓ 200 Ürün Kapasitesi</li>
                <li>✓ Özel Tasarım QR Kod</li>
                <li>✓ 1 Yıl Teknik Destek</li>
                <li>✓ Kategori Yönetimi</li>
                <li>✓ Fotoğraf Ekleme</li>
              </ul>
              {/* <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">Satın Al</button> */}
            </div>
            {/* Premium Paket */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Premium</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">₺5.999 <span className="text-base font-medium text-gray-500">tek seferlik</span></div>
              <p className="text-gray-500 mb-6">Büyük restoranlar ve otel zincirleri için.</p>
              <ul className="mb-6 space-y-2 text-sm text-gray-600">
                <li>✓ 5+ Dil Desteği (Sınırsız)</li>
                <li>✓ Sınırsız Ürün</li>
                <li>✓ Özel Logo ve Tasarım</li>
                <li>✓ Analiz ve Raporlama</li>
                <li>✓ Öncelikli Destek</li>
              </ul>
              {/* <button className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">Satın Al</button> */}
            </div>
          </div>
          
          {/* Ek Avantajlar */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">Tüm Paketlerde Dahil</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-700">Kolay Kurulum</h4>
                <p className="text-sm text-gray-500 text-center">5 dakikada hazır</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-700">Mobil Uyumlu</h4>
                <p className="text-sm text-gray-500 text-center">Tüm cihazlarda mükemmel</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-700">Hızlı Yükleme</h4>
                <p className="text-sm text-gray-500 text-center">Anında açılır</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-700">Güncelleme</h4>
                <p className="text-sm text-gray-500 text-center">Ücretsiz güncellemeler</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim Bölümü */}
      <section id="contact" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-700 mb-6 leading-tight">Bizimle İletişime Geçin</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">QR menü hizmetimiz hakkında sorularınız mı var? Size yardımcı olmaktan mutluluk duyarız!</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Sol: İletişim Bilgileri */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-700 mb-6">İletişim Bilgileri</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">Telefon</h4>
                      <p className="text-gray-500">+90 (533) 240 02 57</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shadow-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">E-posta</h4>
                      <p className="text-gray-500">info@kodlooper.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shadow-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">Adres</h4>
                      <p className="text-gray-500">İstanbul, Türkiye</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 shadow-sm">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">Çalışma Saatleri</h4>
                      <p className="text-gray-500">Pazartesi - Cuma: 09:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
          
            </div>
            
            {/* Sağ: İletişim Formu */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-700 mb-6">Mesaj Gönderin</h3>
              {/* <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad</label>
                    <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="Adınızı girin" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
                    <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="E-posta adresinizi girin" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="Telefon numaranızı girin" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Konu</label>
                  <select id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                    <option value="">Konu seçin</option>
                    <option value="demo">Demo Talebi</option>
                    <option value="pricing">Fiyatlandırma Bilgisi</option>
                    <option value="technical">Teknik Destek</option>
                    <option value="partnership">İş Ortaklığı</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" placeholder="Mesajınızı yazın..."></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg">
                  Mesaj Gönder
                </button>
              </form> */}
              <div className="w-full h-[600px]  rounded-2xl border  p-8">
                <iframe src="https://form.jotform.com/251980627070963" className="w-full h-[600px]"> </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <span className="text-2xl font-extrabold tracking-tight">Hanipop</span>
              </div>
              <p className="text-gray-300 max-w-md mb-6">Restoranlar için modern QR menü çözümleri. Dijital dönüşümünüzde yanınızdayız.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Hizmetler</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">QR Menü</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dijital Menü</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Çoklu Dil Desteği</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Teknik Destek</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Şirket</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kariyer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">İletişim</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Hanipop - Kodlooper Yazılım Ltd. Şti. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
