# expressApp

bu app express icin ilk adimdir.
app.use(express.static('public')) => middleware; app.js ile kullanici tarafindaki dosyalari birbiriyle iliskilendirir.

simdi sira kullanici tarafini server tarafiyla/ database ile nasil iliskilendiricez:
1- create the model
mesela Todo listesi yapalim:
 Todo:
author: String,
todo: String,
difficultyLevel: Number
2- Setup/configure DataBase
3- Create Seed.js


index.js => connects to db and require todo model.

dosya1:
herzaman db ile iletisimdedir, require abc models.Bizim ornegimizde index.js bunu yapiyor. Diger dosyalarda bu dosyadaki bilgileri kullanmamiz icin export metodunu kullanmammiz lazim.

dosya2:
 tum Schemalar bu dosyada olur. diger dosyalar gibi bu dosyada da require mongoose var cunku db'den olan talepleri burdan  sagliyoruz. bu app'te todo.js

dosya3:  
BU dosyada neredeyse tum dosyalarla iletisim halindeyiz bu yuzden bircok dosyadan require yapiyoruz. tum app.use, app.get app.post app.put app.listen lar bu dosyada oluyor. database ile birebir iletisimde olan ve tum gerekli bilgileri ordan toplayip sunan dosya. genel anlamda adi server.js tir cunku app.js ile db arasindaki kopru gibidir. Bu app'tede server.js'tir.

dosya4:
 Bu dosya genellikle tum ajax'lerin oldugu dosya. bu ajax'lere bagli olan tum fonksiyonlar da bu dosyada bulunur. $(document).ready({}) kavrayan dosyadir. kullanici ile baglantida olan dosya oldugu icin kullanicidan gelen tum talepleri alip server.js'e verir.server.js'te bu talep edilen bu bilgileri db'den alip app.js'e gonderir.app.js ise kullaniciya  bu bilgileri sunar.

 dosya5:
 bu dosya application baslangicinda onemli cunku  sistemin bu bilgiler isiginda nasil bir app olacagini bize gosterir. // This file allows us to seed our application with data. genelde icinde array  vardir ver modeli ithal ederek ordaki bilgileri kullanir cunku model dosyalari icinde genelde Schema'larin oldugu dosyadir. Schema genel anlamda bize kalip bilgiler verir. bizde seed js icinde bu kalip bilgileri yeni guncel bilgilerle doldururuz. Ornegin  abc Schema{ author: String } diyorsa biz bu kalibi seed.js icinde abc schema {author: "Sherry"} olarak kullaniyoruz. yani bir tarz form olarakta dusunebiliriz. basvuru formu gibi dusunun, her basvuran kisi kendi bilgilerini giricektir. sistem sonra bu bilgileri isleyip degistiricektir. Bu app'te henuz kullanmadik ama genelde seed.js olarak gecer.
