var mainTable,
    newPackageRow,
    packageTitleInput,
    packageTtnInput,
    settingsHash;

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
        settingsHash.push({
          title: $(elem).find('td.package-title')[0].innerHTML,
          ttn: $(elem).find('td.package-ttn')[0].innerHTML
        })
      }
    })
    console.log(settingsHash);
    location.href = 'pebblejs://close#' + encodeURIComponent(JSON.stringify(settingsHash));
  })
})