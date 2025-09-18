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
    <div id="collapseHouseRules" style="display:none; margin-bottom:12px;">
      <div class="propheader ckedit" style="font-family:sans-serif;font-size:13px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="border:1px solid #ddd;padding:8px;"><b>⏰ Check-in</b><br>From 16:00 to 18:00<br>Guests are required to show a photo ID and credit card upon check-in. You’ll need to let the property know in advance what time you’ll arrive.</td></tr>
          <tr><td style="border:1px solid #ddd;padding:8px;"><b>⏰ Check-out</b><br>From 10:00 to 11:00</td></tr>
          <tr><td style="border:1px solid #ddd;padding:8px;"><b>❌ Cancellation / prepayment</b><br>Cancellation and prepayment policies vary according to accommodation type. Please <a href="#">enter the dates of your stay</a> and check the conditions of your required option.</td></tr>
          <tr><td style="border:1px solid #ddd;padding:8px;"><b>💥 Damage policy</b><br>If you cause damage to the property during your stay, you could be asked to pay up to ¥15,000 after check-out, according to this property’s <a href="#">Damage Policy</a>.</td></tr>
          <tr><td style="border:1px solid #ddd;padding:8px;"><b>👨‍👩‍👧 Children and beds</b><br><u>Child policies:</u> Children of any age are welcome.<br><br><u>Cot and extra bed policies:</u> No cots available. Extra beds are subject to availability.</td></tr>
          <tr><td style="border:1px solid #ddd;padding:8px;"><b>🚫 No age restriction</b><br>There is no age requirement for check-in.</td></tr>
          <tr><td style="border:1px solid #ddd;padding:8px;"><b>🚭 Smoking</b><br>Smoking is not allowed.</td></tr>
          <tr><td style="border:1px solid #ddd;padding:8px;"><b>🎉 Parties</b><br>Parties/events are not allowed.</td></tr>
          <tr><td style="border:1px solid #ddd;padding:8px;"><b>🔇 Quiet hours</b><br>Guests must be quiet between 23:00 and 19:00.</td></tr>
          <tr><td style="border:1px solid #ddd;padding:8px;"><b>🐾 Pets</b><br>Pets are not allowed.</td></tr>
        </table>
      </div>
    </div>

    <!-- FAQS -->
    <div id="collapseFAQs" style="display:none;">
      <div class="propheader ckedit" style="font-family:sans-serif;font-size:13px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="border:1px solid #ddd;padding:8px;">
            <details><summary style="cursor:pointer;font-weight:600;">👥 How many guests can sleep at MEET IN SKYtree?</summary><div style="margin-top:4px;">Up to 12 guests.</div></details>
          </td></tr>
          <tr><td style="border:1px solid #ddd;padding:8px;">
            <details><summary style="cursor:pointer;font-weight:600;">🌇 Does it have a balcony?</summary><div style="margin-top:4px;">Yes, some options have a balcony.</div></details>
          </td></tr>
          <tr><td style="border:1px solid #ddd;padding:8px;">
            <details><summary style="cursor:pointer;font-weight:600;">⏰ What are the check-in and check-out times?</summary><div style="margin-top:4px;">Check-in is from 16:00, check-out until 11:00.</div></details>
          </td></tr>
          <tr><td style="border:1px solid #ddd;padding:8px;">
            <details><summary style="cursor:pointer;font-weight:600;">🛏️ How many bedrooms?</summary><div style="margin-top:4px;">1 bedroom</div></details>
          </td></tr>
          <tr><td style="border:1px solid #ddd;padding:8px;">
            <details><summary style="cursor:pointer;font-weight:600;">💰 How much does it cost?</summary><div style="margin-top:4px;">Varies by date. Enter your dates to see pricing.</div></details>
          </td></tr>
          <tr><td style="border:1px solid #ddd;padding:8px;">
            <details><summary style="cursor:pointer;font-weight:600;">📍 How far from central Tokyo?</summary><div style="margin-top:4px;">8 km from central Tokyo.</div></details>
          </td></tr>
          <tr><td style="border:1px solid #ddd;padding:8px;">
            <details><summary style="cursor:pointer;font-weight:600;">👨‍👩‍👧 Is it family-friendly?</summary><div style="margin-top:4px;">Yes, very popular with families.</div></details>
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
    sectionToShow.style.display = !isOpen ? "block" : "none";
    sectionToHide.classList.remove("open");
    sectionToHide.style.display = "none";
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
