
document.addEventListener("DOMContentLoaded", function () {
  // Create container
  const container = document.createElement("div");
  container.innerHTML = `
    <div class="fakelink" onclick="showid('collapseHouseRules');">🏠 House Rules</div>
    <div class="fakelink" onclick="showid('collapseFAQs');">❓ FAQs</div>

    <div id="collapseHouseRules" style="display:none;">
      <div class="fakelink" onclick="hideid('collapseHouseRules');">✖ Close</div>
      <div class="propheader ckedit" style='font-family:sans-serif;font-size:13px'>
        <table style='width:100%;border-collapse:collapse'>
          <tr><td style='border:1px solid #ccc;padding:6px'>🕓 <b>Check-in</b><br>16:00–18:00</td></tr>
          <tr><td style='border:1px solid #ccc;padding:6px'>⏰ <b>Check-out</b><br>10:00–11:00</td></tr>
          <tr><td style='border:1px solid #ccc;padding:6px'>❌ <b>Cancellation</b><br>Cancel up to 2 days = full refund</td></tr>
          <tr><td style='border:1px solid #ccc;padding:6px'>👶 <b>Children</b><br>All ages welcome. No cots. Extra beds limited.</td></tr>
          <tr><td style='border:1px solid #ccc;padding:6px'>🚭 <b>Smoking</b><br>No smoking inside.</td></tr>
          <tr><td style='border:1px solid #ccc;padding:6px'>🎉 <b>Parties</b><br>Not allowed.</td></tr>
          <tr><td style='border:1px solid #ccc;padding:6px'>🐾 <b>Pets</b><br>Not allowed.</td></tr>
        </table>
      </div>
    </div>

    <div id="collapseFAQs" style="display:none;">
      <div class="fakelink" onclick="hideid('collapseFAQs');">✖ Close</div>
      <div class="propheader ckedit" style='font-family:sans-serif;font-size:13px'>
        <table style='width:100%;border-collapse:collapse'>
          <tr><td style='border:1px solid #ccc;padding:6px'>
            <details><summary>👥 How many guests can stay?</summary>
            <div style='margin-top:4px;'>Up to 12 depending on option selected.</div></details>
          </td></tr>
          <tr><td style='border:1px solid #ccc;padding:6px'>
            <details><summary>⏰ Check-in/out times?</summary>
            <div style='margin-top:4px;'>Check-in 16:00 / Check-out 11:00</div></details>
          </td></tr>
          <tr><td style='border:1px solid #ccc;padding:6px'>
            <details><summary>👨‍👩‍👧 Family-friendly?</summary>
            <div style='margin-top:4px;'>Yes. MEET IN SKYtree is popular with families.</div></details>
          </td></tr>
        </table>
      </div>
    </div>
  `;
  document.body.appendChild(container);
});
