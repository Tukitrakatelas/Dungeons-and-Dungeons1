const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Cnds.OnAnyAnimFinished,
		C3.Plugins.Sprite.Acts.StartAnim
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{DesplazarHasta: 0},
	{Personaje: 0},
	{Sólido: 0},
	{Teclado: 0},
	{Salida: 0},
	{Llave: 0},
	{Puerta: 0},
	{Sprite: 0},
	{Llave2: 0},
	{Puerta2: 0},
	{Sprite2: 0}
];

self.InstanceType = {
	Personaje: class extends self.ISpriteInstance {},
	Plataforma: class extends self.ITiledBackgroundInstance {},
	Teclado: class extends self.IInstance {},
	Salida: class extends self.ISpriteInstance {},
	Llave: class extends self.ISpriteInstance {},
	Puerta: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Llave2: class extends self.ISpriteInstance {},
	Puerta2: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {}
}