onEvent('item.registry', (event) => {
    const generalItems = [
        'uncommon_lootbox',
        'rare_lootbox',
        'epic_lootbox',
        'legendary_lootbox',
        'food_lootbox'
    ];

    generalItems.forEach((item) => {
        event.create(item).group('KubeJS').texture(`kubejs:item/${item}`);
    });
});