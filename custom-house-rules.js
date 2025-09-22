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
    /* Widen the Bootstrap column that contains the custom content */
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
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "⏰ チェックイン" : "⏰ Check-in"}</b><br>${isJapanese ? "16:00〜18:00<br>チェックインの際、写真付きIDとクレジットカードの提示が必要です。" : "From 16:00 to 18:00<br>Guests must show a photo ID and credit card upon check-in."}</td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "⏰ チェックアウト" : "⏰ Check-out"}</b><br>${isJapanese ? "10:00〜11:00" : "From 10:00 to 11:00"}</td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "❌ キャンセル / 事前支払い" : "❌ Cancellation / prepayment"}</b><br>${isJapanese ? "プランにより異なります。条件を確認するには日付を入力してください。" : "Varies by plan. Please enter your dates to see conditions."}</td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "💥 損害ポリシー" : "💥 Damage policy"}</b><br>${isJapanese ? "チェックアウト後に最大15,000円の請求が発生する場合があります。" : "Damage may be charged up to ¥15,000 after check-out."}</td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "👨‍👩‍👧 お子様とベッド" : "👨‍👩‍👧 Children and beds"}</b><br>${isJapanese ? "<u>お子様：</u> すべての年齢のお子様を歓迎します。<br><u>ベビーベッド/追加ベッド：</u> ベビーベッドはご利用いただけません。追加ベッドは数に限りがあります。" : "<u>Children:</u> All ages welcome.<br><u>Cots/extra beds:</u> Not available. Limited extra beds."}</td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "🚫 年齢制限なし" : "🚫 No age restriction"}</b><br>${isJapanese ? "チェックインに年齢制限はありません。" : "No age requirement for check-in."}</td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "🚭 禁煙" : "🚭 Smoking"}</b><br>${isJapanese ? "館内は禁煙です。" : "Not allowed."}</td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "🎉 パーティー・イベント" : "🎉 Parties"}</b><br>${isJapanese ? "開催できません。" : "Not allowed."}</td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "🔇 静かにする時間帯" : "🔇 Quiet hours"}</b><br>${isJapanese ? "23:00〜翌日19:00" : "23:00 to 19:00"}</td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>${isJapanese ? "🐾 ペット" : "🐾 Pets"}</b><br>${isJapanese ? "同伴不可。" : "Not allowed."}</td></tr>
        </table>
      </div>
    </div>

    <!-- FAQS -->
    <div id="collapseFAQs" class="slide-section">
      <div class="propheader ckedit" style="font-family:sans-serif;font-size:13px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="border:1px solid #ddd;padding:10px;">
            <details class="faq-toggle"><summary><b>${isJapanese ? "👥 宿泊可能人数は？" : "👥 How many guests?"}</b></summary><div>${isJapanese ? "部屋タイプによって最大12名様まで宿泊可能です。" : "Up to 12 guests depending on room type."}</div></details>
          </td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;">
            <details class="faq-toggle"><summary><b>${isJapanese ? "🌇 バルコニーはありますか？" : "🌇 Does it have a balcony?"}</b></summary><div>${isJapanese ? "はい、一部のお部屋にはバルコニーがあります。" : "Yes, some units have balconies."}</div></details>
          </td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;">
            <details class="faq-toggle"><summary><b>${isJapanese ? "⏰ チェックイン/アウト時間は？" : "⏰ What are the check-in/out times?"}</b></summary><div>${isJapanese ? "チェックインは16:00から、チェックアウトは11:00までです。" : "Check-in from 16:00, check-out until 11:00."}</div></details>
          </td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;">
            <details class="faq-toggle"><summary><b>${isJapanese ? "🛏️ ベッドルームはいくつ？" : "🛏️ How many bedrooms?"}</b></summary><div>${isJapanese ? "1ベッドルームです。" : "1 bedroom."}</div></details>
          </td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;">
            <details class="faq-toggle"><summary><b>${isJapanese ? "💰 宿泊料金は？" : "💰 Cost of stay?"}</b></summary><div>${isJapanese ? "日付によって異なります。料金をご確認ください。" : "Depends on date. Enter your dates to check price."}</div></details>
          </td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;">
            <details class="faq-toggle"><summary><b>${isJapanese ? "📍 東京中心部からの距離？" : "📍 Distance from Tokyo center?"}</b></summary><div>${isJapanese ? "東京中心部から約8kmです。" : "About 8 km."}</div></details>
          </td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;">
            <details class="faq-toggle"><summary><b>${isJapanese ? "👨‍👩‍👧 家族向けですか？" : "👨‍👩‍👧 Family friendly?"}</b></summary><div>${isJapanese ? "はい、ご家族にも人気です。" : "Yes, popular with families."}</div></details>
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


