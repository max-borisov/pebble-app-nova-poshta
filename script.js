var mainTable,
    newPackageRow,
    packageTitleInput,
    packageTtnInput;

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
})