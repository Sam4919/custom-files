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
  const target = document.getElementById("collapse58283030");
  if (!target) return;

  const container = document.createElement("div");
  container.innerHTML = `
    <div style='margin-top:10px;'>
      <div class="fakelink" onclick="document.getElementById('collapseHouseRules').style.display='block';">🏠 House Rules</div>
      <div class="fakelink" onclick="document.getElementById('collapseFAQs').style.display='block';">❓ FAQs</div>
    </div>

    <div id="collapseHouseRules" style="display:none; margin-top:6px;">
      <div class="fakelink" onclick="document.getElementById('collapseHouseRules').style.display='none';">✖ Close House Rules</div>
      <div class="propheader ckedit" style="font-family:sans-serif;font-size:13px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="border:1px solid #ccc;padding:6px;">🕓 <b>Check-in</b><br>16:00–18:00. Guests must show photo ID & credit card.</td></tr>
          <tr><td style="border:1px solid #ccc;padding:6px;">⏰ <b>Check-out</b><br>10:00–11:00</td></tr>
          <tr><td style="border:1px solid #ccc;padding:6px;">❌ <b>Cancellation</b><br>Cancel up to 2 days before = full refund. Later = full charge.</td></tr>
          <tr><td style="border:1px solid #ccc;padding:6px;">👶 <b>Children</b><br>All ages welcome. No cots. Extra beds limited.</td></tr>
          <tr><td style="border:1px solid #ccc;padding:6px;">🚭 <b>Smoking</b><br>Not allowed inside the property.</td></tr>
          <tr><td style="border:1px solid #ccc;padding:6px;">🎉 <b>Parties</b><br>Not allowed.</td></tr>
          <tr><td style="border:1px solid #ccc;padding:6px;">🐾 <b>Pets</b><br>Not allowed.</td></tr>
        </table>
      </div>
    </div>

    <div id="collapseFAQs" style="display:none; margin-top:6px;">
      <div class="fakelink" onclick="document.getElementById('collapseFAQs').style.display='none';">✖ Close FAQs</div>
      <div class="propheader ckedit" style="font-family:sans-serif;font-size:13px;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="border:1px solid #ccc;padding:6px;">
              <details>
                <summary>👥 How many guests can stay?</summary>
                <div>Up to 12 guests depending on room type.</div>
              </details>
            </td>
          </tr>
          <tr>
            <td style="border:1px solid #ccc;padding:6px;">
              <details>
                <summary>⏰ What are the check-in/out times?</summary>
                <div>Check-in from 16:00 / Check-out until 11:00.</div>
              </details>
            </td>
          </tr>
          <tr>
            <td style="border:1px solid #ccc;padding:6px;">
              <details>
                <summary>👨‍👩‍👧 Is the property family-friendly?</summary>
                <div>Yes, MEET IN SKYtree is popular with families.</div>
              </details>
            </td>
          </tr>
        </table>
      </div>
    </div>
  `;

  target.querySelector(".propheader.ckedit").appendChild(container);
});

