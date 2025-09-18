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
  const isJapanese = document.documentElement.lang?.startsWith("ja") || navigator.language.startsWith("ja");
  const target = document.getElementById("collapse58283030");
  if (!target) return;

  const container = document.createElement("div");
  container.style.maxWidth = "820px";
  container.style.margin = "0 auto";

  container.innerHTML = `
    <style>
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
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>⏰ Check-in</b><br>From 16:00 to 18:00<br>Guests must show a photo ID and credit card upon check-in.</td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>⏰ Check-out</b><br>From 10:00 to 11:00</td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>❌ Cancellation / prepayment</b><br>Varies by plan. Please <a href="#">enter your dates</a> to see conditions.</td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>💥 Damage policy</b><br>Damage may be charged up to ¥15,000 after check-out.</td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>👨‍👩‍👧 Children and beds</b><br><u>Children:</u> All ages welcome.<br><u>Cots/extra beds:</u> Not available. Limited extra beds.</td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>🚫 No age restriction</b><br>No age requirement for check-in.</td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>🚭 Smoking</b><br>Not allowed.</td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>🎉 Parties</b><br>Not allowed.</td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>🔇 Quiet hours</b><br>23:00 to 19:00</td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;"><b>🐾 Pets</b><br>Not allowed.</td></tr>
        </table>
      </div>
    </div>

    <!-- FAQS -->
    <div id="collapseFAQs" class="slide-section">
      <div class="propheader ckedit" style="font-family:sans-serif;font-size:13px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="border:1px solid #ddd;padding:10px;">
            <details class="faq-toggle"><summary><b>👥 How many guests?</b></summary><div>Up to 12 guests depending on room type.</div></details>
          </td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;">
            <details class="faq-toggle"><summary><b>🌇 Does it have a balcony?</b></summary><div>Yes, some units have balconies.</div></details>
          </td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;">
            <details class="faq-toggle"><summary><b>⏰ What are the check-in/out times?</b></summary><div>Check-in from 16:00, check-out until 11:00.</div></details>
          </td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;">
            <details class="faq-toggle"><summary><b>🛏️ How many bedrooms?</b></summary><div>1 bedroom.</div></details>
          </td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;">
            <details class="faq-toggle"><summary><b>💰 Cost of stay?</b></summary><div>Depends on date. Enter your dates to check price.</div></details>
          </td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;">
            <details class="faq-toggle"><summary><b>📍 Distance from Tokyo center?</b></summary><div>About 8 km.</div></details>
          </td></tr>
          <tr><td style="border:1px solid #ddd;padding:10px;">
            <details class="faq-toggle"><summary><b>👨‍👩‍👧 Family friendly?</b></summary><div>Yes, popular with families.</div></details>
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


