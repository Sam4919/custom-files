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



setTimeout(function () {
  const isJapanese =
    document.documentElement.lang?.toLowerCase().startsWith("ja") ||
    navigator.language?.toLowerCase().startsWith("ja");

  const target = document.getElementById("collapse58283030");
  if (!target) return;

  const container = document.createElement("div");
  container.style.maxWidth = "100%";
  container.style.margin = "0 auto";

  container.innerHTML = `
<style>
  .b24-prop-module.b24-prop-58 {
    width: 100% !important;
    max-width: 100% !important;
    flex: 0 0 100% !important;
  }
  .slide-section {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height 0.5s ease, opacity 0.5s ease;
  }
  .slide-section.open {
    max-height: 2000px;
    opacity: 1;
  }
  details.faq-toggle summary {
    cursor: pointer;
    list-style: none;
    position: relative;
    font-weight: bold;
    padding-right: 20px;
    margin-bottom: 6px;
  }
  details.faq-toggle summary::after {
    content: "∨";
    position: absolute;
    right: 0;
  }
  details.faq-toggle[open] summary::after {
    content: "∧";
  }
  details.faq-toggle > div {
    margin-top: 10px;
    transition: all 0.3s ease;
  }
/* Added styles for spacing and indent */
    .slide-section td {
    line-height: 1.5;
  }
  .slide-section td b {
    display: block;
    margin-bottom: 10px;
  }
  .slide-section td b + br + text,
  .slide-section td b + br {
    padding-left: 10px;
  }

</style>

<table style='width:100%; border-collapse:collapse; margin:18px 0; font-family:sans-serif; font-size:13px;'>
  <tr>
    <td style='width:50%; text-align:center; background:#e3e3e3; border:1px solid #aaa; cursor:pointer; padding:10px; font-weight:bold;' id='btnRules'>
      ▼ ${isJapanese ? "🏠 ハウスルール" : "🏠 House Rules"}
    </td>
    <td style='width:50%; text-align:center; background:#e3e3e3; border:1px solid #aaa; cursor:pointer; padding:10px; font-weight:bold;' id='btnFaqs'>
      ▼ ${isJapanese ? "❓ よくある質問" : "❓ FAQs"}
    </td>
  </tr>
</table>

<!-- HOUSE RULES -->
<div id="collapseHouseRules" class="slide-section">
  <div class="propheader ckedit" style="font-family:sans-serif;font-size:13px;">
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "⏰ チェックイン" : "⏰ Check-in"}</b><br>${isJapanese ? "16:00～18:00<br>チェックイン時に写真付き身分証明書とクレジットカードの提示が必要です。到着予定時間を事前にご連絡ください。" : "From 16:00 to 18:00<br>Guests are required to show a photo identification and credit card upon check-in. You’ll need to let the property know in advance what time you’ll arrive."}</td></tr>
      <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "⏰ チェックアウト" : "⏰ Check-out"}</b><br>${isJapanese ? "10:00～11:00" : "From 10:00 to 11:00"}</td></tr>
      <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "❌ キャンセル／事前支払い" : "❌ Cancellation / prepayment"}</b><br>${isJapanese ? "キャンセルおよび前払いの条件は宿泊プランにより異なります。ご希望の条件をご確認いただくには、ご宿泊日を入力してください。" : "Cancellation and prepayment policies vary according to accommodation type. Please enter the dates of your stay and check the conditions of your required option."}</td></tr>
      <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "💥 損害補償ポリシー" : "💥 Damage policy"}</b><br>${isJapanese ? "滞在中に施設へ損害を与えた場合、チェックアウト後に最大15,000円の請求を受ける可能性があります。" : "If you cause damage to the property during your stay, you could be asked to pay up to ¥15,000 after check-out, according to this property's Damage Policy."}</td></tr>
      <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "👨‍👩‍👧 お子様とベッド" : "👨‍👩‍👧 Children and beds"}</b><br>
        ${isJapanese ? "<b>お子様のポリシー:</b><br>あらゆる年齢のお子様を歓迎しています。正確な料金と利用人数を確認するには、予約時にお子様の人数と年齢を入力してください。<br><br><b>ベビーベッド・エキストラベッド:</b><br>この宿泊施設ではベビーベッドの利用はできません。<br>エキストラベッドの利用は空き状況により異なります。" :
        "<b>Child policies:</b><br>Children of any age are welcome.<br><br>To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.<br><br><b>Cot and extra bed policies:</b><br>The number of extra beds allowed is dependent on the option you choose. There are no cots available at this property. All extra beds are subject to availability."}
      </td></tr>
      <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "🚫 年齢制限なし" : "🚫 No age restriction"}</b><br>${isJapanese ? "チェックインに年齢制限はありません。" : "There is no age requirement for check-in."}</td></tr>
      <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "🚭 禁煙" : "🚭 Smoking"}</b><br>${isJapanese ? "館内は禁煙です。" : "Smoking is not allowed."}</td></tr>
      <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "🎉 パーティー・イベント" : "🎉 Parties"}</b><br>${isJapanese ? "パーティーやイベントはできません。" : "Parties/events are not allowed."}</td></tr>
      <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "🔇 静かな時間帯" : "🔇 Quiet hours"}</b><br>${isJapanese ? "23:00～翌19:00は静かにお過ごしください。" : "Guests must be quiet between 23:00 and 19:00."}</td></tr>
      <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "🐾 ペット" : "🐾 Pets"}</b><br>${isJapanese ? "ペットの同伴は禁止されています。" : "Pets are not allowed."}</td></tr>
    </table>
  </div>
</div>

<!-- FAQS -->
<div id="collapseFAQs" class="slide-section">
  <div class="propheader ckedit" style="font-family:sans-serif;font-size:13px;">
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="border:1px solid #ddd;padding:10px;">
        <details class="faq-toggle"><summary><b>${isJapanese ? "👥 MEET IN SKYtreeには何人まで宿泊できますか？" : "👥 How many guests can sleep at MEET IN SKYtree?"}</b></summary><div>${isJapanese ? "MEET IN SKYtreeでは最大12名まで宿泊可能です。" : "MEET IN SKYtree can accommodate the following group size: 12 guests."}</div></details>
      </td></tr>
      <tr><td style="border:1px solid #ddd;padding:10px;">
        <details class="faq-toggle"><summary><b>${isJapanese ? "🌇 バルコニーはありますか？" : "🌇 Does MEET IN SKYtree have a balcony?"}</b></summary><div>${isJapanese ? "はい、一部のお部屋にバルコニーがあります。詳細は当施設のページをご確認ください。" : "Yes, there are options at this property that have a balcony. You can find out more about this and the other facilities at MEET IN SKYtree on this page."}</div></details>
      </td></tr>
      <tr><td style="border:1px solid #ddd;padding:10px;">
        <details class="faq-toggle"><summary><b>${isJapanese ? "⏰ チェックイン・チェックアウトの時間は？" : "⏰ What are the check-in and check-out times at MEET IN SKYtree?"}</b></summary><div>${isJapanese ? "チェックインは16:00から、チェックアウトは11:00までです。" : "Check-in at MEET IN SKYtree is from 16:00, and check-out is until 11:00."}</div></details>
      </td></tr>
      <tr><td style="border:1px solid #ddd;padding:10px;">
        <details class="faq-toggle"><summary><b>${isJapanese ? "🛏️ ベッドルームはいくつありますか？" : "🛏️ How many bedrooms does MEET IN SKYtree have?"}</b></summary><div>${isJapanese ? "1ベッドルームをご用意しています。" : "MEET IN SKYtree has the following number of bedrooms: 1 bedroom."}</div></details>
      </td></tr>
      <tr><td style="border:1px solid #ddd;padding:10px;">
        <details class="faq-toggle"><summary><b>${isJapanese ? "💰 宿泊料金は？" : "💰 How much does it cost to stay at MEET IN SKYtree?"}</b></summary><div>${isJapanese ? "ご宿泊料金は日付・人数・ポリシーによって異なります。価格をご確認ください。" : "The prices at MEET IN SKYtree may vary depending on your stay (e.g. dates you select, hotel’s policy etc.). See the prices by entering your dates."}</div></details>
      </td></tr>
      <tr><td style="border:1px solid #ddd;padding:10px;">
        <details class="faq-toggle"><summary><b>${isJapanese ? "📍 東京中心部からの距離は？" : "📍 How far is MEET IN SKYtree from the centre of Tokyo?"}</b></summary><div>${isJapanese ? "東京中心部から約8kmの場所にあります。" : "MEET IN SKYtree is 8 km from the centre of Tokyo."}</div></details>
      </td></tr>
      <tr><td style="border:1px solid #ddd;padding:10px;">
        <details class="faq-toggle"><summary><b>${isJapanese ? "👨‍👩‍👧 ファミリーに人気ですか？" : "👨‍👩‍👧 Is MEET IN SKYtree popular with families?"}</b></summary><div>${isJapanese ? "はい、MEET IN SKYtreeはご家族連れに人気があります。" : "Yes, MEET IN SKYtree is popular with guests booking family stays."}</div></details>
      </td></tr>
    </table>
  </div>
</div>
  `;

  target.querySelector(".propheader.ckedit").appendChild(container);

  const btnRules = document.getElementById("btnRules");
  const btnFaqs = document.getElementById("btnFaqs");
  const sectionRules = document.getElementById("collapseHouseRules");
  const sectionFaqs = document.getElementById("collapseFAQs");

  function toggle(sectionToShow, sectionToHide, btnThis, btnOther, labelThis, labelOther) {
  const isOpen = sectionToShow.classList.contains("open");
  sectionToShow.classList.toggle("open", !isOpen);
  sectionToHide.classList.remove("open");

  // Reattach container if needed (in case DOM was cleared by Beds24 toggle)
  const slot = target.querySelector(".propheader.ckedit");
  if (slot && !slot.contains(container)) {
    slot.appendChild(container);
  }

  btnThis.innerHTML = (isOpen ? "▼ " : "▲ Close ") + labelThis;
  btnOther.innerHTML = "▼ " + labelOther;
}


  btnRules.addEventListener("click", () =>
    toggle(sectionRules, sectionFaqs, btnRules, btnFaqs,
      isJapanese ? "🏠 ハウスルール" : "🏠 House Rules",
      isJapanese ? "❓ よくある質問" : "❓ FAQs"
    )
  );

  btnFaqs.addEventListener("click", () =>
    toggle(sectionFaqs, sectionRules, btnFaqs, btnRules,
      isJapanese ? "❓ よくある質問" : "❓ FAQs",
      isJapanese ? "🏠 ハウスルール" : "🏠 House Rules"
    )
  );
}, 800);


