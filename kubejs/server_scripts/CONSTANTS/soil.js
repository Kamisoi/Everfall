//priority: 1001
// Registry of soils for use in botany pots
const soilRegistry = [
    { block: 'minecraft:coarse_dirt', categories: ['dirt', 'coarse_dirt'], growthModifier: -0.65 },
    {
        block: 'minecraft:crimson_nylium',
        categories: ['dirt', 'crimson_nylium', 'nylium', 'mushroom'],
        growthModifier: 0.05
    },
    {
        block: 'byg:embur_nylium',
        categories: ['dirt', 'embur_nylium', 'nylium', 'blue_netherrack', 'mushroom'],
        growthModifier: 0.05
    },
    { block: 'farmersdelight:rich_soil_farmland', categories: ['dirt', 'farmland'], growthModifier: 0.15 },

    { block: 'minecraft:farmland', categories: ['dirt', 'farmland'], growthModifier: 0.15 },
    { block: 'byg:glowcelium_block', categories: ['dirt', 'glowcelium', 'mushroom'], growthModifier: 0.05 },
    { block: 'byg:podzol_dacite', categories: ['dirt', 'grass', 'podzol', 'mushroom'], growthModifier: 0.05 },
    { block: 'minecraft:podzol', categories: ['dirt', 'grass', 'podzol', 'mushroom'], growthModifier: 0.05 },
    { block: 'byg:meadow_grass_block', categories: ['dirt', 'grass'], growthModifier: 0.05 },
    { block: 'byg:overgrown_dacite', categories: ['dirt', 'grass'], growthModifier: 0.05 },
    { block: 'minecraft:grass_block', categories: ['dirt', 'grass'], growthModifier: 0.05 },
    { block: 'byg:peat', categories: ['dirt', 'mushroom'], growthModifier: 0.25 },

    { block: 'minecraft:mycelium', categories: ['dirt', 'mushroom'], growthModifier: 0.05 },
    { block: 'byg:overgrown_netherrack', categories: ['dirt', 'netherrack', 'nether', 'grass'], growthModifier: 0.05 },
    { block: 'byg:sythian_nylium', categories: ['dirt', 'sythian_nylium', 'nylium', 'mushroom'], growthModifier: 0.05 },
    {
        block: 'minecraft:warped_nylium',
        categories: ['dirt', 'warped_nylium', 'nylium', 'mushroom'],
        growthModifier: 0.05
    },
    { block: 'byg:meadow_dirt', categories: ['dirt'], growthModifier: 0 },
    { block: 'byg:mud_block', categories: ['dirt'], growthModifier: 0 },
    { block: 'minecraft:dirt', categories: ['dirt'], growthModifier: 0 },
    { block: 'byg:ivis_phylium', categories: ['end_stone', 'ivis_phylium'], growthModifier: 0.05 },
    { block: 'minecraft:end_stone', categories: ['end_stone'], growthModifier: -0.5 },
    { block: 'minecraft:lava_bucket', categories: ['fluid', 'liquid', 'lava'], growthModifier: 0 },
    { block: 'minecraft:water_bucket', categories: ['fluid', 'liquid', 'water'], growthModifier: 0 },
    {
        block: 'byg:nylium_soul_sand',
        categories: ['nether', 'nylium_soul_sand', 'nylium_soul_soil', 'soul_sand', 'soul_soil'],
        growthModifier: 0
    },
    {
        block: 'byg:nylium_soul_soil',
        categories: ['nether', 'nylium_soul_sand', 'nylium_soul_soil', 'soul_sand', 'soul_soil'],
        growthModifier: 0
    },
    { block: 'minecraft:netherrack', categories: ['nether'], growthModifier: 0 },
    { block: 'byg:black_sand', categories: ['sand', 'black_sand'], growthModifier: 0 },
    { block: 'byg:blue_sand', categories: ['sand', 'blue_sand'], growthModifier: 0 },
    { block: 'byg:pink_sand', categories: ['sand', 'pink_sand'], growthModifier: 0 },
    { block: 'byg:purple_sand', categories: ['sand', 'purple_sand'], growthModifier: 0 },
    { block: 'minecraft:red_sand', categories: ['sand', 'red_sand'], growthModifier: 0 },
    { block: 'minecraft:sand', categories: ['sand', 'red_sand'], growthModifier: 0 },
    { block: 'byg:white_sand', categories: ['sand', 'white_sand'], growthModifier: 0 },
    { block: 'minecraft:soul_sand', categories: ['soul_sand', 'nether'], growthModifier: -0.3 },
    { block: 'minecraft:soul_soil', categories: ['soul_sand', 'nether'], growthModifier: 0 },

    { block: 'atmospheric:arid_sand', categories: ['sand', 'arid_sand'], growthModifier: 0.0 },
    { block: 'atmospheric:red_arid_sand', categories: ['sand', 'arid_sand', 'red_arid_sand'], growthModifier: 0.0 },
    { block: 'byg:imparius_phylium', categories: ['end_stone', 'mushroom', 'imparius_phylium'], growthModifier: 0.5 }
];

let dirt_types = ['blood', 'earth', 'ender', 'sky'],
    grass_types = ['earth', 'ender', 'ichor', 'sky', 'vanilla'];

