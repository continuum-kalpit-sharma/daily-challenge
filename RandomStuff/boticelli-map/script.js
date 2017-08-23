(function() {

    var descriptions = {
        mercure: "Mercure, qui écarte les nuages avec son caducée, a pour tâche de 'dévoiler' les mystères de l'amour",
        hands: "Castitas 'la Chasteté est initiée aux mystères de l'amour par ses soeurs Voluptas (la Volupté, ou le Plaisir) et Pulchritudo (la Beauté)",
        castitas: "Castitas, la Chasteté",
        voluptas: "Voluptas, la Volupté",
        pulchritudo: "Pulchritudo, la Beauté",
        sisters: "Les Grâces représentent la concorde et l'amour désintéréressé, qui donne tout sans rien demander en retour",
        cupidon: "Cupidon va décocher dans le coeur de Castitas une flèche portant la flamme de la passion",
        flore: "L'image de Flore, déesse du Printemps, est ici inspirée d'un passage des Fastes d'Ovide. Elle représente l'union des principes opposés de la Chasteté (Chloris) et de l'Amour (Zéphyr)",
        venus: "Vénus représente la vertu de l'humanitas et l'amour spirituel, capables d'élever l'âme jusqu'à Dieu et de la rendre immortelle",
        zéphyr: "Zéphyr, le vent printannier féconde la vierge Chloris avec le 'souffle de la passion'. Ce tableau est la traduction picturale de l'ouvrage de Mauritanus Capella, De nuptiis Philogiae et Mercurii",
    }

    $(document).ready(console.log('ready'));
    $('area').on('mouseover', function(e) {
        console.log(e.target.alt, descriptions[e.target.alt]);
        $('#title').html(e.target.alt);
        $('#description').html(descriptions[e.target.alt]);
    })

})();
