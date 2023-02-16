### XSL 
XSL 3 bölümden oluşur:
-	XSLT dokümanlarını dönüştürmek için kullanılan  dildir
-	XPath XML dokümanındaki  bölümleri açıklar
-	XSL-FO XML dokümanının formatını değiştirmek için kullanılır

XSL XML için  biçimlendirme dilidir

Css lerden daha komplikedir
a.xml
```
<?xml version="1.0" encoding="ISO-8859-1"?>
<?xml-stylesheet type="text/xsl" href="a.xsl" ?> 
<telefon>
<mesaj>
  <kime>Ayseye</kime>
  <kimden>Aliden</kimden>
  <sebep>Yaþgünü</sebep>
 </mesaj>
<mesaj>
  <kime>Aliye</kime>
  <kimden>Fatmadan</kimden>
  <sebep>Yıldönümü</sebep>
 </mesaj>
</telefon>
```
a.xsl
```
<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
<xsl:template match="/">
  <body style="background-color:#EEEEEE">
    <xsl:for-each select="telefon/mesaj">
      <div style="background-color:red">
        <span style="font-weight:bold;color:white">
        <xsl:value-of select="kime"/></span>
        <xsl:value-of select="kimden"/>
      </div>
      <div style="background-color:green">
        <xsl:value-of select="sebep"/>
        <span style="background-color:blue">
          (<xsl:value-of select=" sebep "/> Sebep Göster)
        </span>
      </div>
    </xsl:for-each>
    </body>
</xsl:template>
</xsl:stylesheet>
```
XSL  bir dizi kuraldan oluşur ve buna  templates adı verilir.

Herbir <xsl:template> elemanı ile  belirtilen kök elemanına  erişilince kural uygulanır.
belge içerisinde  match="/"  (kuralı tüm belgeye uygula anlamına gelir)
select attribute  XPath ifadesine sahiptir  (telefon/mesaj/kime) gibi

Çıktıyı Filtrelemek
   <xsl:for-each select="telefon/mesaj[kime='Ayse']">
-	=  
-	!= 
-	&lt; “<” 
-	&gt;”>”   
-	
Gibi ifadeler çıktıyı filtrelemek için kullanılabilir
Örnek
```
<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
 <html>
  <body>
  <table border="1">
   <tr bgcolor="red">
      <th>Title</th>
      <th>Artist</th>
   </tr>
   <xsl:for-each select="telefon/mesaj[kime='Ayse']">
   <tr>
      <td><xsl:value-of select="kimden"/></td>
      <td><xsl:value-of select="sebep"/></td>
   </tr>
   </xsl:for-each>
  </table>
 </body>
 </html>
</xsl:template></xsl:stylesheet>
Sort İfadesi
<xsl:sort select="kime"/>
	      <div style="background-color:green">
        <xsl:value-of select="kime"/>
        <xsl:value-of select="kimden"/>
	      </div>
```


a.xml
```
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="a.xsl" ?> 
<kayitlar>
<ogrenci>
<ad>ali</ad>
<soyad>geldi</soyad>
<yas>22</yas>
</ogrenci>
<ogrenci>
<ad>ayse</ad>
<soyad>fatos</soyad>
<yas>34</yas>
</ogrenci>
<ogrenci>
<ad>can</ad>
<soyad>cem</soyad>
<yas>5</yas>
</ogrenci>
</kayitlar>
```
a.xsl
```
<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
<xsl:template match="/">
  <body style="background-color:#EEEEEE">
    <xsl:for-each select="kayitlar/ogrenci">
	   <xsl:if test="yas &gt; 30">
	 <div style="background-color:red">
        <xsl:value-of select="ad"/>
        <xsl:value-of select="soyad"/>
	 </div>
     </xsl:if>
    </xsl:for-each>
    </body>
</xsl:template>
</xsl:stylesheet>

<xsl:choose>, <xsl:when>, <xsl:otherwise> gibi sorgular kullanılarak kritere uygun alanlar  renklendirilebilir
```


Okul.XML
```
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="okul.xsl" ?> 
<kayitlar>
<ogrenci>
<ad>ali</ad>
<soyad>geldi</soyad>
<yas>22</yas>
</ogrenci>
<ogrenci>
<ad>ayse</ad>
<soyad>fatos</soyad>
<yas>34</yas>
</ogrenci>
<ogrenci>
<ad>can</ad>
<soyad>cem</soyad>
<yas>5</yas>
</ogrenci>
</kayitlar>
```
okul.XLS
```
<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
<xsl:template match="/">
  <body style="background-color:#EEEEEE">
   <table border="1">
      <tr bgcolor="#9acd32">
        <th>AD</th>
       <th>SOYAD</th>
<th>yas</th>
      </tr>
    <xsl:for-each select="kayitlar/ogrenci">
	 <tr> 
	 <xsl:choose>
          <xsl:when test="yas &gt; 10">
	  <td bgcolor="#ff00ff">
          <xsl:value-of select="ad"/> </td> <td bgcolor="#ff00ff">
	  <xsl:value-of select="soyad"/> </td> 
	  <td bgcolor="#ff00ff">
	  <xsl:value-of select="yas"/> </td> 
          </xsl:when>
	  <xsl:otherwise>
          <td  bgcolor="#ddeeff"><xsl:value-of select="ad"/></td>
	  	  <td bgcolor="#ddeeff"><xsl:value-of select="soyad"/></td>
	    <td bgcolor="#ddeeff"><xsl:value-of select="yas"/></td>
          </xsl:otherwise>
	  </xsl:choose>

	</tr>
    </xsl:for-each>
    </table>
    </body>
</xsl:template>
</xsl:stylesheet>
```
<xsl:apply-templates> Elemanı ile bir kuralı  xml dokumanı veyea herhangi bir eleman   için  uygulamak mümkündür.


Örnek
```
<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<h2>Stil Template</h2> 
<xsl:apply-templates/> 
</body>
</html>
</xsl:template><xsl:template match="yas">
<xsl:apply-templates select="ad"/> 
<xsl:apply-templates select="yas"/>
<span style="color:#ff0000">
<xsl:value-of select="."/></span><br/>
</xsl:template>
</xsl:stylesheet>

```


### DTD(Document Type Definition)
DTD'leri, XML dökümanlarının yapı bilgilerini tutan modüller olarak tanımlamak mümkündür.Döküman içinde kullanılacak olan tüm varlıklar daha önceden DTD içerisinde tanımlanmalıdır. DTD ile XML dosyaları kendi formatları ile ilgili bilgileri taşır.Farklı kişiler belirli bir DTD ile verileri kullanabilir veya dış dünyayla etkileşime geçebilir.
*XML belgeleri içine dahil edilebilen ya da ayrı bir dosya halinde kullanılabilen DTD blokları, XML belgelerinde tam bir denetim sağlarlar. Tüm geçerlilik kuralları DTD içinde tanımlanabilir. DTD belgelerini, farklı kaynaklardan gelen XML belgelerini denetlemek için kullanabilirsiniz. Bu belgeleri kaynaklara ulaştırıp doğrudan kaynak üzerinde denetleme yaptığınızda size ulaşan XML belgesinin tam olarak istediğiniz gibi olmasını sağlayabilirsiniz. İş ortaklarınızla XML biçiminde veri alışverişi yaparken hangi etiketlerin, hangi sıralamada kullanılacağını ortağınızla beraber belirlersiniz. Hangi elementin ve özniteliğin hangi sırada olacağı, boş değer verilip verilemeyeceği gibi birçok kural DTD belgelerinde (ve DTD bloklarında) tanımlanır. 
DTD, XML belgesinin haritası olarak kabul edilir ve kurallara uygun belgeler hazırlamak için DTD dosyası tek başına yeterlidir. 
Peki standart XML belgeleri oluşturmak ne anlama geliyor? Bilginin XML biçiminde olması, anlaşılır olduğu anlamına gelmez. Etiketlerin diziliş biçiminin ve içerik kurallarının belirlenmiş olması gerekir. 
*DTD  dokuman içerisinde  veya dışarısında  uygulanabilir
Yapılandırıcı Bloklar:

-	Elements      -------Temel bloklardır "body" , "table
-	Tags           --------Elemanları işaretlemek(markup) için kullanılır
- Attributes     --------Elemanlar hakkında extra bilgi içerir  <img src .......
- Entities        --------- &lt; &gt; 
- PCDATA     ---------Açılımı parsed character data
- CDATA          ----- Parser tarafından dikkate alınmayacak metin
                                                                     
içeride tanımlama(StandAlone)
 ```                                                                    
                                                                     ```
<?xml version="1.0"?>
<!DOCTYPE mesaj [  
  <!ELEMENT mesaj (kime, kimden, sebep)>
  <!ELEMENT kime      (#PCDATA)>//yorumlanır
  <!ELEMENT kimden    (#PCDATA)>//cdata yorumlanmaz
  <!ELEMENT sebep (#PCDATA)>
]>
<mesaj>
  <kime>Ayseye</kime>
  <kimden>Aliden</kimden>
  <sebep>Yasgunu</sebep>
 </mesaj>
```



<!-- DOCTYPE mesaj bu dokumanın mesaj tipinde olduğunu gosterir -->

ELEMENT mesaj mesaj elemanının 3 elemana sahip olduğunu goterir

Kime "#PCDATA" veritipindeki  elemanı gosterir.DTD'lerde elementlerin sıralaması önemlidir.


Dışarıda Tanımlama
```

<?xml version="1.0"?>
<!DOCTYPE mesaj SYSTEM " mesaj.dtd">
<mesaj>
  <kime>Ayseye</kime>
  <kimden>Aliden</kimden>
  <sebep>Yasgunu</sebep>
 </mesaj>
 ```
mesaj.dtd
```
<!ELEMENT mesaj (kime, kimden, sebep)>
  <!ELEMENT kime      (#PCDATA)>
  <!ELEMENT kimden    (#PCDATA)>
  <!ELEMENT sebep (#PCDATA)>
```
XML standartlarını geliştirmek kolay iş değil. Bundan daha zoru bunları kabul ettirmektir. Bu yüzden belli konsorsiyumlar kurulmuştur .
## Element tanımlama
#PCDATA dışında EMPTY ve ANY türünde iki tanımlama mevcut. EMPTY olarak tanımlanan bir element, XML belgesinde mutlaka boş bırakılmalıdır. ANY olarak tanımlanmış element ise herhangi bir değer alabilir 
Ornek1 (a.xml)
```
<?xml version="1.0" encoding="ISO-8859-9"?>
<!-- Dtd Document Type Definition Amac gecerli yapilandirici bloklarý 
olusturmak Dtd ile xml dosyalari kendi formatlarý ile ilgili 
bilgiler tasir.Iki türlü tanimlama yapilabilmektedir.içerden(StandAlone)
ve disardan. 
 -->
 <!-- Standalone -->
 <!-- Asagidaki belge iyi biçimlendirilmis ve gecerli bir xml 
 belgesidir tanýmlanan DTD'ye gore		 -->
<!DOCTYPE mesaj[
<!ELEMENT mesaj (kime,kimden,sebep)>   <!-- mesaj elementi içerisinde										bulunacaklar		 -->
<!ELEMENT kime (#PCDATA)>
<!ELEMENT kimden (#PCDATA)>
<!ELEMENT sebep (#PCDATA)>
]>
<mesaj>
<kime>Ayseye</kime>  <!--siralama yukaridaki kurala uygun yapilacak  -->
<kimden>Aliye</kimden>
<sebep>Sevgililer gunu</sebep>  <!-- ve tum elementler tanimlanacak -->
</mesaj>
```
Ornek2-(b.xml)(ANY)
```
<?xml version="1.0" encoding="ISO-8859-9" ?>
<!DOCTYPE ogrenci[
<!ELEMENT ogrenci (ad,soyad,yas,not)>
<!ELEMENT ad (#PCDATA)>
<!ELEMENT soyad (#PCDATA)>
<!ELEMENT yas (#PCDATA)>
<!ELEMENT not ANY >
]>
<ogrenci>  
<ad>Ayse</ad>
<soyad>Can</soyad>
<yas>44</yas>
<not>Evlendi
<soyad>Nur</soyad><!--Any içerisinde diger  elementler tekrar yazýlabilir -->
</not>
</ogrenci>
```
Örnek-3(a.xml) (EMPTY)
```
<?xml version="1.0" encoding="ISO-8859-9" ?>
<!DOCTYPE ogrenci[
<!ELEMENT ogrenci (ad,soyad,yas,not)>
<!ELEMENT ad (#PCDATA)>
<!ELEMENT soyad (#PCDATA)>
<!ELEMENT yas (#PCDATA)>
<!ELEMENT not EMPTY >
]>
<ogrenci>  
<ad>Ayse</ad>
<soyad>Can</soyad>
<yas>44</yas>
<not/>
<!--not elementinin içeriginde bisey olmamali -->
</ogrenci>

```

+	Kesinlikle kullanılmalı	1	Sonsuz

*	İstenildiği kadar	0	Sonsuz

?	Bir kez ya da hiç	0	1






Örnek-4 
```
<?xml version="1.0" encoding="ISO-8859-9" ?>
<!DOCTYPE ogrenci[
<!ELEMENT ogrenci (ad?)>  <!-- ************** -->
<!ELEMENT ad (#PCDATA)>
]>
<ogrenci>  
<ad>Ayse</ad>
<!-- -->
</ogrenci>
<!-- 1- <!ELEMENT ogrenci (ad+)> ifadesi kullanirsak
element en az 1 kere en cok sonsuz kere kullanýlabilir
	2-<!ELEMENT ogrenci (ad*)>
	ifadesi kullanirsak element en az 0 kez en cok sonsuz
	
	3- <!ELEMENT ogrenci (ad?)>ifadesi kullanirsak
element en az 0 kere en cok 1 kez kullanilabilir
 -->
 ```
Örnek5 
```
<?xml version="1.0" encoding="ISO-8859-9" ?>
<!DOCTYPE ogrenci[
<!ELEMENT ogrenci (ad?,soyad+,yas,not)>
<!ELEMENT ad (#PCDATA)>
<!ELEMENT soyad (#PCDATA)>
<!ELEMENT yas (#PCDATA)>
<!ELEMENT not ANY >
]>
<ogrenci>  
<ad>Ayse</ad>
<soyad>Can</soyad>
<yas>44</yas>
<not>Evlendi
<soyad>Nur</soyad><!--Any içerisinde diger  elementler tekrar yazılabilir -->
</not>
</ogrenci>

```
Örnek-6
```
<?xml version="1.0" encoding="ISO-8859-9" ?>
<!DOCTYPE ogrenci[
<!ELEMENT ogrenci (ad|soyad|yas|not)?>
<!ELEMENT ad (#PCDATA)>
<!ELEMENT soyad (#PCDATA)>
<!ELEMENT yas (#PCDATA)>
<!ELEMENT not ANY >
]>
<ogrenci>  
<ad>Can</ad>
</ogrenci>
<!--<!ELEMENT ogrenci (ad|soyad|yas|not)> ifadesinde
elementlerden en az ve en cok 1  kez-->
```

Özellikler


1-den fazla özellik tanımlanabilir

Default attribute 
<!ELEMENT dortgen EMPTY>
<!ATTLIST dortgen genislik CDATA "0"> 
*Deger atanmazsa varsayılan deger 0.



Örnek-1(a.xml)
```
<?xml version="1.0" encoding="ISO-8859-9" ?>
<!DOCTYPE ogrenci[
<!ELEMENT ogrenci (ad,soyad,yas,not)>
<!ELEMENT ad (#PCDATA)>
<!ELEMENT soyad (#PCDATA)>
<!ELEMENT yas (#PCDATA)>
<!ELEMENT not ANY >
<!ATTLIST not durum CDATA "iyi" >
]>
<ogrenci>  
<ad>Ayse</ad>
<soyad>Can</soyad>
<yas>44</yas>
<not durum="kotu">test</not>
</ogrenci>
<!-- 
<!ATTLIST not durum CDATA "iyi" > not elementine özellik verildi
özellik degerini yazmazsak varsayılan deger olrak iyi degeri atanacak
 -->
```
IMPLIED-REQUIRED- FIXED

Ornek-2
```
<?xml version="1.0" encoding="ISO-8859-9" ?>
<!DOCTYPE ogrenci[
<!ELEMENT ogrenci (ad,soyad,yas,tel)>
<!ELEMENT ad (#PCDATA)>
<!ELEMENT soyad (#PCDATA)>
<!ELEMENT yas (#PCDATA)>
<!ELEMENT tel ANY >
<!ATTLIST tel fax CDATA #IMPLIED>  <!-- !!!!!!! -->
]>
<ogrenci>  
<ad>Ayse</ad>
<soyad>Can</soyad>
<yas>44</yas>
<tel></tel>
</ogrenci>
<!-- 
1-<!ATTLIST tel fax CDATA #REQUIRED>  dedigimiz zaman
telefon elementi icin fax ozelliginin mutlaka 
belirtilmesi gerektigini soyluyoruz
*******************************************
2-<!ATTLIST tel fax CDATA #FIXED "sabitdeger">   dedigimiz zaman
telefon elementi icin fax ozelliginin sabit 
oldugunu ve tarafimizdan degistirilemeyecegini soyluyoruz
*******************************************
3-<!ATTLIST tel fax CDATA #IMPLIED>   dedigimiz zaman
telefon elementi icin fax ozelliginin istege 
bagli oldugunu soyluyoruz.
 -->
 ```
SIRALI özellikler

```
<!ELEMENT ogrenci (ad|soyad|yas)>

Örnek 1
<?xml version="1.0" encoding="ISO-8859-9" ?>
<!DOCTYPE ogrenci[
<!ELEMENT ogrenci (ad|soyad|yas)>
<!ELEMENT ad (#PCDATA)>
<!ELEMENT soyad (#PCDATA)>
<!ELEMENT yas (#PCDATA)>
<!ELEMENT not ANY >
]>
<ogrenci>  
<ad>Ayse</ad>
<!-- Yukaridaki elemanlardan sadece 1 tanesinin bulunmasi yeterli 
<!ELEMENT ogrenci (ad|soyad|yas)?> 0 veya 1 kez maximum
-->
</ogrenci>
```


Jscript Validate

```
<html>
<body>
HATA - BUL
<script>
var xmlDoc = new ActiveXObject("Microsoft.XMLDOM")
xmlDoc.async="false"
xmlDoc.validateOnParse="true"
xmlDoc.load("c.xml")
document.write("<br />Error Code: ")
document.write(xmlDoc.parseError.errorCode)
document.write("<br />Error Reason: ")
document.write(xmlDoc.parseError.reason)
document.write("<br />Error Line: ")
document.write(xmlDoc.parseError.line)
</script>
</body>
</html>
```





