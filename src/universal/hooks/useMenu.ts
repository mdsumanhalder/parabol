import {useMemo} from 'react'
import getBBox from 'universal/components/RetroReflectPhase/getBBox'
import useCoords, {MenuPosition} from 'universal/hooks/useCoords'
import useLoadingDelay from 'universal/hooks/useLoadingDelay'
import useMenuPortal from 'universal/hooks/useMenuPortal'
import usePortal, {UsePortalOptions} from 'universal/hooks/usePortal'

interface Options extends UsePortalOptions {
  loadingWidth?: number
}

const useMenu = (menuPosition: MenuPosition, options: Options = {}) => {
  const {onOpen, onClose} = options
  // TODO useCoords should export the actual menuPosition (it changes if there's not enough space to put it where it's preferred)
  const {targetRef, originRef, coords} = useCoords(menuPosition)
  const {portal, closePortal, togglePortal, status} = usePortal({onOpen, onClose})
  const loadingWidth = useMemo(() => {
    if (options.loadingWidth) return options.loadingWidth
    const bbox = getBBox(originRef.current)
    return Math.max(40, bbox ? bbox.width : 40)
  }, [originRef.current])
  const {loadingDelay, loadingDelayRef} = useLoadingDelay()
  const menuPortal = useMenuPortal(
    portal,
    targetRef,
    loadingWidth,
    coords,
    status,
    menuPosition,
    loadingDelayRef
  )
  return {togglePortal, originRef, menuPortal, closePortal, loadingDelay, loadingWidth}
}

export default useMenu
