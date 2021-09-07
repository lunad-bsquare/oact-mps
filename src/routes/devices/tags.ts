/*********************************************************************
 * Copyright (c) Intel Corporation 2021
 * SPDX-License-Identifier: Apache-2.0
 **********************************************************************/
import { logger as log } from '../../utils/logger'
import { Request, Response } from 'express'

export async function getDistinctTags (req: Request, res: Response): Promise<void> {
  try {
    const results = await req.db.devices.getDistinctTags()
    if (results != null) {
      res.status(200).json(results).end()
    } else {
      res.status(404).end()
    }
  } catch (err) {
    log.error(`getDistinctTags exception: ${err}`)
    res.status(500).end()
  }
}
