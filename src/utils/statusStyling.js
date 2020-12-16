export const statusSwitch = (status) => {
    switch (status) {
        case 'editar':
        case 'autorizar':
        case 'arquivar':
        case 'Promessa Descumprida':
            return 'text-warning';
        case 'publicado':
        case 'editado':
        case 'Promessa Cumprida':
        case 'Positiva':
            return 'text-success';
        case 'Negativa':
        case 'arquivado':
        case 'Corrupção':
            return 'text-danger';
        default:
            break;
    }
}