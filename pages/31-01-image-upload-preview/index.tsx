import { ChangeEvent, useState } from "react";

export default function ImageUploadPreviewPlage() {
  const [imageUrl, setImageUrl] = useState("");

  // ð ì´ë¯¸ì§ ë¤ì´ì¤ë í¨ì
  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // file ë°ìì¨ë¤. file ì´ ìììë ìì¼ëê¹ ìµìë ì²´ì´ë (ë°°ì´ë ê°ë¥)
    if (!file) {
      // ì´ë¯¸ì§ ê²ì¦
      alert("íì¼ì´ ììµëë¤!");
      return;
    }
    // ë´ì¥ë ê¸°ë¥ new FileReader: íì¼ ê°ì²´ë¥¼ ì´ì©í´ ë´ì©ì ì½ê³  ì¬ì©ì ì»´í¨í°ì ì ì¥íë ê²ì ê°ë¥íê² í´ì£¼ë ê¸°ë¥
    const fileReader = new FileReader();
    // íì¼ì url ííë¡ ì½ê² ë¤,  file ì ì½ì´ì ìì URLì ííë¡ ë§ë¤ì´ì¤ë¤.
    fileReader.readAsDataURL(file);
    // ì´ë¯¸ì§ê° ì±ê³µì ì¼ë¡ ì½í ê²½ì° onload í¨ìê° ì¤í > ë¤ ì½ì´ì§ ê²°ê³¼ë¬¼ data ê° ë¤ì´ì´
    fileReader.onload = (data) => {
      // string íìììë§ ì¤í
      if (typeof data.target?.result === "string") {
        console.log(data.target?.result); // url ííë¡ ì½ì ê²°ê³¼ë¬¼ // ê¶ê¸íëê¹ ì½ìë¡ ì°ì´ë³´ì
        // ì´ urlì state ì ë£ì´ì£¼ì
        setImageUrl(data.target?.result); // ì´ë¯¸ì§ ì ì¥ì´ ëëê¹  imagUrlì´ ë§ë¤ì´ì§ê² ì§!!
      }
    };
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} />
      <img src={imageUrl} />
    </div>
  );
}
