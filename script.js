var mainTable,
    newPackageRow,
    packageTitleInput,
    packageTtnInput,
    settingsHash,
    packageTTN;

$(function() {
  $('table').on('click', 'td button', function(e) {
    $(e.currentTarget).parents('tr').remove();
  })

  $('form button').click(function(e) {
    e.preventDefault();

    mainTable = $('table tbody');
    packageTitleInput = $('#package-title');
    packageTtnInput = $('#package-ttn');

    newPackageRow = mainTable.find('tr.hidden').clone();
    newPackageRow.removeClass('hidden');
    newPackageRow.find('td.package-title').html(packageTitleInput.val());
    newPackageRow.find('td.package-ttn').html(packageTtnInput.val());
    mainTable.append(newPackageRow);

    packageTitleInput.val('');
    packageTtnInput.val('');
  })

  $('.btn-save-settings').click(function(e) {
    e.preventDefault();
    settingsHash = [];
    $('table.table tr').each(function(index, elem) {
      if ($(elem).attr('class') != 'hidden') {
        packageTTN = $(elem).find('td.package-ttn')[0].innerHTML
        packageTTN = packageTTN.match(/\d{8,}/)
        packageTTN = packageTTN[0]
        settingsHash.push({
          title: $(elem).find('td.package-title')[0].innerHTML,
          ttn: packageTTN
        })
      }
    })
    console.log(settingsHash);
    location.href = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(settingsHash));

    // <a href=\"tel:59000012345\" x-apple-data-detectors=\"true\" x-apple-data-detectors-type=\"telephone\" x-apple-data-detectors-result=\"0\">59000012345</a>"
  })
})