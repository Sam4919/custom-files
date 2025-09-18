document.addEventListener('DOMContentLoaded', function() {
  const scope = document.getElementById('ajaxroomoffer1-591041');
  if (!scope) return;

  const openLink = scope.querySelector('.fakelink[onclick^="showid"]');
  const closeLink = scope.querySelector('.fakelink[onclick^="hideid"]');
  const calendarContainer = scope.querySelector('.panel-body.b24panel');

  if (openLink && calendarContainer) {
    openLink.addEventListener('click', () => scope.classList.add('b24calendar-active'));
  }
  if (closeLink && calendarContainer) {
    closeLink.addEventListener('click', () => scope.classList.remove('b24calendar-active'));
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const isJapanese = navigator.language.startsWith("ja");
  const target = document.getElementById("collapse58283030");
  if (!target) return;

  const container = document.createElement("div");

  container.innerHTML = `
    <table style='width:100%; border-collapse:collapse; margin:16px 0; font-family:sans-serif; font-size:13px;'>
      <tr>
        <td style='width:50%; text-align:center; background:#e3e3e3; border:1px solid #aaa; cursor:pointer; padding:10px; font-weight:bold;' id='btnRules'>
          ▼ ${isJapanese ? "🏠 ハウスルール" : "🏠 House Rules"}
        </td>
        <td style='width:50%; text-align:center; background:#e3e3e3; border:1px solid #aaa; cursor:pointer; padding:10px; font-weight:bold;' id='btnFaqs'>
          ▼ ${isJapanese ? "❓ よくある質問" : "❓ FAQs"}
        </td>
      </tr>
    </table>

    <div id="collapseHouseRules" style="display:none; overflow:hidden; transition:all 0.3s ease; margin-bottom:10px;">
      <div class="propheader ckedit" style="font-family:sans-serif;font-size:13px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="border:1px solid #ccc;padding:8px;">🕓 <b>${isJapanese ? "チェックイン" : "Check-in"}</b><br>${isJapanese ? "16:00～18:00。チェックイン時に身分証明書とクレジットカードが必要です。" : "16:00–18:00. Guests must show photo ID & credit card."}</td></tr>
          <tr><td style="border:1px solid #ccc;padding:8px;">⏰ <b>${isJapanese ? "チェックアウト" : "Check-out"}</b><br>${isJapanese ? "10:00～11:00" : "10:00–11:00"}</td></tr>
          <tr><td style="border:1px solid #ccc;padding:8px;">❌ <b>${isJapanese ? "キャンセル" : "Cancellation"}</b><br>${isJapanese ? "チェックインの2日前までのキャンセルは全額返金。それ以降は全額請求されます。" : "Cancel up to 2 days before = full refund. Later = full charge."}</td></tr>
          <tr><td style="border:1px solid #ccc;padding:8px;">👶 <b>${isJapanese ? "お子様" : "Children"}</b><br>${isJapanese ? "すべての年齢のお子様が宿泊可能。ベビーベッドなし。エキストラベッドは数に限りあり。" : "All ages welcome. No cots. Extra beds limited."}</td></tr>
          <tr><td style="border:1px solid #ccc;padding:8px;">🚭 <b>${isJapanese ? "喫煙" : "Smoking"}</b><br>${isJapanese ? "館内禁煙です。" : "Not allowed inside the property."}</td></tr>
          <tr><td style="border:1px solid #ccc;padding:8px;">🎉 <b>${isJapanese ? "パーティー" : "Parties"}</b><br>${isJapanese ? "パーティーは禁止されています。" : "Not allowed."}</td></tr>
          <tr><td style="border:1px solid #ccc;padding:8px;">🐾 <b>${isJapanese ? "ペット" : "Pets"}</b><br>${isJapanese ? "ペットの同伴はできません。" : "Not allowed."}</td></tr>
        </table>
      </div>
    </div>

    <div id="collapseFAQs" style="display:none; overflow:hidden; transition:all 0.3s ease;">
      <div class="propheader ckedit" style="font-family:sans-serif;font-size:13px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="border:1px solid #ccc;padding:8px;">
              <details>
                <summary>👥 ${isJapanese ? "何人まで泊まれますか？" : "How many guests can stay?"}</summary>
                <div>${isJapanese ? "最大12名様まで、部屋のタイプによります。" : "Up to 12 guests depending on room type."}</div>
              </details>
            </td>
          </tr>
          <tr>
            <td style="border:1px solid #ccc;padding:8px;">
              <details>
                <summary>⏰ ${isJapanese ? "チェックイン・チェックアウト時間は？" : "What are the check-in/out times?"}</summary>
                <div>${isJapanese ? "チェックインは16:00から / チェックアウトは11:00まで" : "Check-in from 16:00 / Check-out until 11:00."}</div>
              </details>
            </td>
          </tr>
          <tr>
            <td style="border:1px solid #ccc;padding:8px;">
              <details>
                <summary>👨‍👩‍👧 ${isJapanese ? "ファミリー向けですか？" : "Is the property family-friendly?"}</summary>
                <div>${isJapanese ? "はい。ご家族連れにも人気の施設です。" : "Yes, MEET IN SKYtree is popular with families."}</div>
              </details>
            </td>
          </tr>
        </table>
      </div>
    </div>
  `;

  target.querySelector(".propheader.ckedit").appendChild(container);

  const btnRules = document.getElementById("btnRules");
  const btnFaqs = document.getElementById("btnFaqs");
  const sectionRules = document.getElementById("collapseHouseRules");
  const sectionFaqs = document.getElementById("collapseFAQs");

  btnRules.addEventListener("click", () => {
    const show = sectionRules.style.display !== "block";
    sectionRules.style.display = show ? "block" : "none";
    sectionFaqs.style.display = "none";
    btnRules.innerHTML = show ? "▲ " + (isJapanese ? "ハウスルールを閉じる" : "Close House Rules") : "▼ " + (isJapanese ? "🏠 ハウスルール" : "🏠 House Rules");
    btnFaqs.innerHTML = "▼ " + (isJapanese ? "❓ よくある質問" : "❓ FAQs");
  });

  btnFaqs.addEventListener("click", () => {
    const show = sectionFaqs.style.display !== "block";
    sectionFaqs.style.display = show ? "block" : "none";
    sectionRules.style.display = "none";
    btnFaqs.innerHTML = show ? "▲ " + (isJapanese ? "よくある質問を閉じる" : "Close FAQs") : "▼ " + (isJapanese ? "❓ よくある質問" : "❓ FAQs");
    btnRules.innerHTML = "▼ " + (isJapanese ? "🏠 ハウスルール" : "🏠 House Rules");
  });
});


