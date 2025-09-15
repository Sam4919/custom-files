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
  // Find the existing General Policy panel
  const target = document.getElementById("collapse58283030");
  if (!target) return;

  const container = document.createElement("div");

  container.innerHTML = `
    <div style="margin-top:10px;">
      <div class="fakelink" onclick="showid('collapseHouseRules')">🏠 House Rules</div>
      <div class="fakelink" onclick="showid('collapseFAQs')">❓ FAQs</div>
    </div>

    <!-- House Rules -->
    <div id="collapseHouseRules" style="display:none; margin-top:6px;">
      <div class="fakelink" onclick="hideid('collapseHouseRules')">✖ Close House Rules</div>
      <div class="propheader ckedit" style="font-family:sans-serif;font-size:13px">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="border:1px solid #ccc;padding:6px">🕓 <b>Check-in</b><br>16:00–18:00</td></tr>
          <tr><td style="border:1px solid #ccc;padding:6px">❌ <b>Cancellation</b><br>Cancel up to 2 days before = full refund.</td></tr>
          <tr><td style="border:1px solid #ccc;padding:6px">🚭 <b>Smoking</b><br>No smoking allowed.</td></tr>
        </table>
      </div>
    </div>

    <!-- FAQs -->
    <div id="collapseFAQs" style="display:none; margin-top:6px;">
      <div class="fakelink" onclick="hideid('collapseFAQs')">✖ Close FAQs</div>
      <div class="propheader ckedit" style="font-family:sans-serif;font-size:13px">
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="border:1px solid #ccc;padding:6px">
              <details>
                <summary>👥 How many guests?</summary>
                <div>Up to 12 depending on the room.</div>
              </details>
            </td>
          </tr>
          <tr>
            <td style="border:1px solid #ccc;padding:6px">
              <details>
                <summary>⏰ Check-in/out times?</summary>
                <div>Check-in 16:00 / Check-out 11:00.</div>
              </details>
            </td>
          </tr>
        </table>
      </div>
    </div>
  `;

  // Inject into general policy section
  target.querySelector(".propheader.ckedit").appendChild(container);
});
