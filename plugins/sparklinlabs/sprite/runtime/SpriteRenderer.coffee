exports.setupComponent = (player, component, config) ->
  if config.spriteAssetId?
    sprite = player.getOuterAsset(config.spriteAssetId).__inner
    component.setSprite sprite

    if config.animationId?
      # FIXME: should we load sprite with SupCore.data?
      for animation in sprite.animations
        if animation.id == config.animationId
          component.setAnimation animation.name
          break
  return
