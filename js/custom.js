/* Codigo JavaScript a la medida */
$(document).ready(function() {
    $('#tabla-datos-abiertos').DataTable({
    language: {
        processing:     "Traitement en cours...",
        search:         "Buscar :",
        lengthMenu:    "Mostra _MENU_ ",
        info:           "Resultados _START_ a _END_ de _TOTAL_ elementos",
        infoEmpty:      "Resultados 0 &agrave; 0 a 0 elementos",
        infoFiltered:   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
        infoPostFix:    "",
        loadingRecords: "Chargement en cours...",
        zeroRecords:    "Aucun &eacute;l&eacute;ment &agrave; afficher",
        emptyTable:     "Aucune donnée disponible dans le tableau",
        paginate: {
            first:      "Premier",
            previous:   "Pr&eacute;c&eacute;dent",
            next:       "Suivant",
            last:       "Dernier"
        },
        aria: {
            sortAscending:  ": activer pour trier la colonne par ordre croissant",
            sortDescending: ": activer pour trier la colonne par ordre décroissant"
        }
    }
});
    $.fn.DataTable.FixedColumns
});