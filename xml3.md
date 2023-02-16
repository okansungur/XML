## XML Schema

Gelecekte xml semalar dtd'nin yerini alacaklar cunku eklentiler için daha esnek yapıdadırlar.Şemalar farklı şemalarla kullanılabilir.Bir dokuman içerisinden birden fazla şemaya referans verilebilir.
Daha zengin ve kullanışlıdırlar,
Xml kullanılarak yazılmışlardır
Veri tiplerini desteklerler Namespaceleri destekler.
Örnek-1(A.xml)
```
<?xml version="1.0"?>
<mesaj
xmlns="http://www.a.com"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://www.a.com a.xsd">
<kime>ali</kime>
<kimden>ayse</kimden>
<sebep>2006-02-21</sebep>
</mesaj>
```
A.xsd
```
<?xml version="1.0"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
targetNamespace="http://www.a.com"
xmlns="http://www.a.com"
elementFormDefault="qualified"><xs:element name="mesaj">
    <xs:complexType>
      <xs:sequence>
	<xs:element name="kime" type="xs:string"/>
	<xs:element name="kimden" type="xs:string"/>
	<xs:element name="sebep" type="xs:date"/>
	</xs:sequence>
    </xs:complexType>
</xs:element></xs:schema>
```

Şema elemanı tüm xml şemasının kokudur xmlns:xs="http://www.w3.org/2001/XMLSchema"
Buradaki elemanlar ve veri tipleri yukarıdaki isim alanından gelmektedir ve xs kısaltması kullanılmaktadır
elementFormDefault="qualified" şemada tanımlı xml tarafından kullanılan elementler nitelikli bir isimalanına sahip olunmalı
XML Schema veri tipleri
-	xs:string 
-	xs:decimal 
-	xs:integer 
-	xs:boolean 
-	xs:date 
-	xs:time 
-	
Simple elementler varsayılan bir değere veya sabit bir degere sahiptir.
```
<xs:element name="renk" type="xs:string" default="red"/>
<xs:element name="renk" type="xs:string" fixed="red"/>
```
XSD Attributes
Basit elementler attributelere sahip olamazlar
```
<xs:attribute name="dil" type="xs:string"/>
<ad dil="TR">Ali</ad>
<xs:attribute name="dil" type="xs:string" use="optional"/>
<xs:attribute name="dil" type="xs:string" use="required"/>
```
Bir XML element veya attribute veri tipi tanımlanırsa element veya attribute içeriği kısıtlanır.Bir xml elemanı xs:date tipinde ise ve “deneme” diye string ifade içermekteyse ozaman gecersiz  bir xml  dosyası olusur.
Restriction  (Aşağıdaki orneklere göre uyarlanacak)
Yas elemanı 0-100 arası degerler alabilir.
```
<xs:element name="yas">
<xs:simpleType>
  <xs:restriction base="xs:integer">
    <xs:minInclusive value="0"/>
    <xs:maxInclusive value="100"/>
  </xs:restriction>
</xs:simpleType>
</xs:element> 
```

Xml elemanının içeriğini bazı degerlerle kısıtlamak istersek enumeration kısıtlaması kullanılır.
```
<xs:element name="araba">
<xs:simpleType>
  <xs:restriction base="xs:string">
    <xs:enumeration value="Ford"/>
    <xs:enumeration value="Golf"/>
    <xs:enumeration value="BMW"/>
  </xs:restriction>
</xs:simpleType>
</xs:element>
```
Veya
```
<xs:element name="car" type="araba_turu"/>
<xs:simpleType name="tip">
  <xs:restriction base="xs:string">
    <xs:enumeration value="Audi"/>
    <xs:enumeration value="Golf"/>
    <xs:enumeration value="BMW"/>
  </xs:restriction>
</xs:simpleType>
```
type="araba_turu" baska elemanlar tarafından da kullanılabilecektir


Xml elemanını bir dizi karakterle sınırlayabiliriz (pattern constraint)
```
<xs:element name="test">
<xs:simpleType>
  <xs:restriction base="xs:string">
    <xs:pattern value="[a-z]"/>
  </xs:restriction>
</xs:simpleType>
</xs:element> 
```
Veya
```
<xs:element name="test">
<xs:simpleType>
  <xs:restriction base="xs:string">
    <xs:pattern value="[a-zA-Z][a-zA-Z][a-zA-Z]"/>
  </xs:restriction>
</xs:simpleType>
</xs:element> 


< xs:pattern value="[xyz]"/> Sadece x,y,z
<xs:pattern value="[0-9][0-9][0-9][0-9][0-9]"/> 
<xs:pattern value="([a-z])*"/> 
<xs:pattern value="male|female"/>
<xs:pattern value="[a-zA-Z0-9]{8}"/> 
```
Schema (Simple Tipler)

a.xml
```
<?xml version="1.0" encoding="ISO-8859-9"?>
<sayi
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:noNamespaceSchemaLocation="a.xsd"
>12</sayi>
********** xs:simpleType içinde element veya nitelik barındırmaz
```
a.xsd
```
<?xml version="1.0"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
elementFormDefault="qualified">
<xs:element name="sayi">
    <xs:simpleType>
 	<xs:restriction base="xs:integer">
	<xs:minInclusive value="10"/>
	<xs:maxInclusive value="20"/>
	</xs:restriction>
	
 </xs:simpleType>
</xs:element></xs:schema>
```
a.xml
```
<?xml version="1.0" encoding="ISO-8859-9"?>
<sayi
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:noNamespaceSchemaLocation="a.xsd"
>32-123</sayi>
```
a.xsd
```
<?xml version="1.0"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
elementFormDefault="qualified">
<xs:element name="sayi">
    <xs:simpleType>
 	<xs:restriction base="xs:string">
<xs:pattern value="\d{2}-\d{3}"/>
	</xs:restriction>
 </xs:simpleType>
</xs:element></xs:schema>
```
Not Deneyin: <xs:pattern value="kayit-No:\d{4}”/>


Komplex tipler

a.xml
```
<?xml version="1.0" encoding="ISO-8859-9"?>
<mesaj
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:noNamespaceSchemaLocation="a.xsd"
>

<kime>ali</kime>
<kimden>ayse</kimden>
<sebep>true</sebep>
<tarih>2006-03-21</tarih>
<sayi>12</sayi>
</mesaj>
<!-- 
<tarih>2006-03-21</tarih>   ..........  	<xs:element name="tarih" type="xs:date"/>
<tarih>2006</tarih> ............  	<xs:element name="tarih" type="xs:gYear"/>
<tarih>2006-12</tarih>............	<xs:element name="tarih" type="xs:gYearMonth"/>

 -->
 ```
a.xsd
```
<?xml version="1.0"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
elementFormDefault="qualified">
<xs:element name="mesaj">
    <xs:complexType>
      <xs:sequence>  
	<xs:element name="kime" type="xs:string"  />
	<xs:element name="kimden" type="xs:string"/>
	<xs:element name="sebep" type="xs:boolean"/>
	<xs:element name="tarih" type="xs:date"/>
	<xs:element name="sayi" type="xs:integer"/>	

  </xs:sequence>

 </xs:complexType>

</xs:element></xs:schema>



*</xs:sequence> ile sıralama yapılmaktadır

```



## XMLDOM(JS)
Bölüm-1
XML-Parser

Xml dosyasını okuma, güncelleme ve kullanım için XML parser’a ihtiyacımız vardır
(Microsoft Internet Explorer 5.0) bunu bize sağlar
Javascript için :

			var xmlDoc=new ActiveXObject("Microsoft.XMLDOM") 
      

Veri Okutmak JavaScript1
```
<script>
var doc = new ActiveXObject("Microsoft.XMLDOM")
doc.async="false"
doc.load("a.xml")
document.write(doc.text);
</script>
Veri Okutmak JavaScript2
<html>
<body>
<script >
var doc = new ActiveXObject("Microsoft.XMLDOM")
doc.async="false"
doc.load("a.xml")
//document.write(doc.documentElement.childNodes.item(0).text+"<br>") //Sadece ilk kok
for(var i=0;i<doc.childNodes.length;i++){
document.write(doc.documentElement.childNodes.item(i).text+"<br>")
}
</script></body></html>

```
Veri Okutmak JavaScript3
```
<html>
<body bgcolor="red" >
<b>To: </b>
<span id="ogrenci"> </span>
<br />
<b>From: </b>
<span id="ad"></span>
<hr>
<b><span id="soyad"></span></b>
<hr>
<b><span id="yas"></span></b>
<script >
var doc=new ActiveXObject("Microsoft.XMLDOM")
doc.async="false"
doc.load("a.xml")
nodes=doc.documentElement.childNodes
ogrenci.innerText= nodes.item(0).text //1.kok eleman icerigi
ad.innerText=  nodes.item(1).text	//2.kok eleman icerigi toplam=2;
</script>
</body>
</html>
```
Veri Okutmak JavaScript4 (next-previous)
```
<HTML>
<BODY>
   <XML ID="test" SRC="a.xml"></XML>
   <input type=button name="b1" value="önceki" onclick="tablom.previousPage()">
      <input type=button name="b2" value="sonraki" onclick="tablom.nextPage()">
   <TABLE ID="tablom" DATASRC="#test" DATAPAGESIZE="1" BORDER="1" >
      <THEAD>
         <TH>Ad</TH>
         <TH>Soyad</TH>
         <TH>Tel</TH>
       </THEAD>     
      <TR >  <TD><SPAN DATAFLD="ad"></SPAN></TD>
         <TD><SPAN DATAFLD="soyad"></SPAN></TD>
         <TD><SPAN DATAFLD="tel"></SPAN></TD>
         </TR>
   </TABLE>
</BODY>
</HTML>
Veri Okutmak JavaScript5
var xml_dosya;
function yukle(){
	xml_dosya=new ActiveXObject('Microsoft.XMLDOM');
	xml_dosya.load('a.xml');
}
var root;
function goruntule(){
yukle();
root=xml_dosya.getElementsByTagName('kime');
for(var i=0;i<root.length;i++){
document.write(root(i).text);
}}
```
Arama yaptırma JavaScript5
```
   <SCRIPT >
      function bul ()
         {
         aranacak = ara.value.toUpperCase();
         if (aranacak == "")
            {
            alo.innerHTML = "veri girilmeli"
			return;//exit
          }
         myxml.recordset.moveFirst();
         sonuc = "";
         while (!myxml.recordset.EOF)
            {
            bulunan = myxml.recordset("ad").value;

//            if (bulunan.toUpperCase().indexOf(aranacak) >=0)
            if (aranacak==bulunan.toUpperCase())
               sonuc += myxml.recordset("ad") + myxml.recordset("soyad") + myxml.recordset("yas") +"<br>";            myxml.recordset.moveNext();
            }
         if (sonuc == "")
            alo.innerHTML = "Bulunamadi";
         else
            alo.innerHTML = sonuc;
         }
   </SCRIPT>
    <XML ID="myxml" SRC="book.xml"></XML>
   <input type=button  name="b1" value="bulunur" onclick="bul()" >
    <input type=text name="ara" > 
   <DIV ID=alo></DIV>
   ```
Arama yaptırma JavaScript6(Taglara göre)
```
      function element_goster()
         {
          if (ara.value == ""){
            alo.innerText = "Lütfen eleman ismi girin";
            return;
            }

         Document = myxml.XMLDocument;
         NodeListesi =Document.getElementsByTagName (ara.value);
               
         sonuc = "";
         for (i=0; i < NodeListesi.length; ++i)
            sonuc += NodeListesi(i).xml + "\n\n";

         if (sonuc == "")
            alo.innerText = "<no matching elements found>";
         else
            alo.innerText = sonuc;
         }
   </SCRIPT>
   <XML ID="myxml" SRC="book.xml"></XML>
    <input type=button  name="b1" value="bulunur" onclick="element_goster()" >
    <input type=text name="ara" > 
<DIV ID=alo></DIV>
```
a.htc
```
<component>
<attach for="element" event="onmouseover"
 handler="hig_lite" />
<attach for="element" event="onmouseout"
 handler="low_lite" />

<script type="text/javascript">
   function hig_lite()
   {
   element.style.color=255
   }
   function low_lite()
   {
   element.style.color=0
   }
</script>
</component>
```
a.htm
```
<html>
<head>
<style>
h1 {behavior:url(a.htc)}
</style>
</head>
<body>
<h1>mouse hareket etsin</h1>
</body>
</html>
```
