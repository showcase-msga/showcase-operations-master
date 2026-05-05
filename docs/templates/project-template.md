---
id: project-template
title: Project Template
sidebar_label: Project Template
sidebar_position: 1
---

# AD#### — [Project Name]

> **How to use:** Copy this file to `docs/projects/ad####.md`. Update the frontmatter, fill in the sections. Delete sections that don't apply. Update Obsidian when changes are made.

## Frontmatter to fill in

```yaml
---
id: ad9001                            # unique slug for the URL (lowercase, no dashes)
title: AD9001 — Project Name          # appears as page title
sidebar_label: AD9001                 # appears in sidebar
booking_id: AD9001                    # primary booking reference
lifecycle_stage: Sales                # Sales / Build Analysis / Sign Off / Asset Acquisition / Project Build / Install Planning / Hardware Procurement / Hardware Setup / Installation / Training / Go Live / Support / Quarterly Visits / End of Life
state: NSW                            # NSW / VIC / QLD
go_live_date: YYYY-MM-DD
---
```

## Project Overview

Brief description of the development. Number of apartments, target market, location, building style.

## Booking & Agreement Tracker

Track the primary booking and any supplementary bookings (additional hardware, scope changes, etc.).

| Booking | Type | Date Signed | Status | Notes |
|---|---|---|---|---|
| AD#### | Primary Sales Agreement | YYYY-MM-DD | Active | Initial scope |
| AD#### | Additional Hardware | YYYY-MM-DD | Active | Added [item] |

## Billing Details

| Field | Value |
|---|---|
| Billing entity | [Company Pty Ltd] |
| ABN | XX XXX XXX XXX |
| Accounts payable contact | [Name] |
| Accounts payable email | [Email] |
| Accounts payable phone | [Phone] |
| Billing address | [Address] |
| Payment model | Upfront / Subscription |

## Key Contacts

| Role | Name | Email | Phone |
|---|---|---|---|
| Client primary contact | | | |
| Client signatory | | | |
| Site contact (Tech Ops) | | | |
| AD Group CSP | | | |
| AD Group Sales Manager | | | |

## Solutions Sold

- [ ] Showcase Software
- [ ] Immersion Room (LED wall cinema)
- [ ] Interactive Floorplate Projection
- [ ] Tablet Controller + Presentation Software
- [ ] Interactive Neighbourhood Map
- [ ] 3D Virtual Walkthrough
- [ ] Architectural Model Lighting Integration

## Commercial Summary

| Item | Total |
|---|---|
| Total contract value (ex GST) | $XX,XXX |
| Software subtotal | $XX,XXX |
| Hardware subtotal | $XX,XXX |
| Supplementary bookings total | $XX,XXX |
| Payment model | Upfront / Subscription |

*Note: All commercial figures are placeholder until auth is in place. See sales agreement PDFs in Drive for actuals.*

## Hardware Map

Hardware grouped by functional category. Mirror the structure used in sales agreements.

### Software

| Item | Description | Status |
|---|---|---|
| Showcase | Core platform, [specific features] | Active |
| Model Lighting Integration | [details] | Active |

### Screens & Displays

| Item | Make/Model | Asset ID | Location | Warranty Expiry |
|---|---|---|---|---|
| LED Wall | [Pixel pitch + dimensions] | LED-XXX | [Room] | YYYY-MM-DD |
| Commercial Screen | [Brand + size] | SCR-XXX | [Room] | YYYY-MM-DD |
| Touchscreen | [Brand + model] | TCH-XXX | [Room] | YYYY-MM-DD |

### Media Players (NUCs)

| Item | Make/Model | Asset ID | IP | Location | Warranty Expiry |
|---|---|---|---|---|---|
| Showcase NUC | Intel NUC[XX] | NUC-XXX | 192.168.x.x | [Room] | YYYY-MM-DD |

### Control (Tablets)

| Item | Make/Model | Asset ID | IP | Location | Warranty Expiry |
|---|---|---|---|---|---|
| Tablet | Samsung Tab S[X] | TAB-XXX | 192.168.x.x | [Room] | YYYY-MM-DD |

### Audio

| Item | Make/Model | Asset ID | Location | Warranty Expiry |
|---|---|---|---|---|
| Ceiling Speakers | [Brand + spec] | SPK-XXX | [Room] | YYYY-MM-DD |
| Amplifier | [Brand + model] | AMP-XXX | [Room] | YYYY-MM-DD |
| DSP | [Brand + model] | DSP-XXX | [Room] | YYYY-MM-DD |
| Audio Streamer | [Brand + model] | STR-XXX | [Room] | YYYY-MM-DD |

### Network

| Item | Make/Model | Asset ID | Location | Notes |
|---|---|---|---|---|
| Router/Gateway | [Brand + model] | NET-XXX | Comms cabinet | |
| Switch | [Brand + model] | SW-XXX | Comms cabinet | PoE |
| Access Point | [Brand + model] | AP-XXX | [Location] | |

### Video Processing & Distribution

| Item | Make/Model | Asset ID | Location | Notes |
|---|---|---|---|---|
| LED Processor | [Brand + model] | PROC-XXX | Comms cabinet | |
| HDBaseT Extender | [Brand + model] | EXT-XXX | [Location] | |

### Installation & Programming

| Service | Status | Notes |
|---|---|---|
| Cabling & freight | Complete / Pending | |
| Hardware installation | Complete / Pending | |
| Audio zoning & routing | Complete / Pending | |
| Lighting control programming | Complete / Pending | |
| Curtain/blind control | Complete / Pending | |
| Project management | Complete / Pending | |

## Zone Configuration

Document which tablet controls which screens, audio zones, and lighting zones.

- **[Zone Name]:** Tablet `TAB-XXX` controls `SCR-XXX, SCR-XXX` via NUC `NUC-XXX`
- **Audio routing:** [Source] → [DSP] → [Speakers]
- **Lighting zones:** [Zone 1], [Zone 2]

## Pre-Installation Checklist

- [ ] Sales agreement signed
- [ ] Hardware procured
- [ ] Network plan confirmed
- [ ] Site survey complete
- [ ] Electrical plans reviewed
- [ ] Installation date booked
- [ ] Installer crew confirmed
- [ ] Pre-install client briefing done

## Installation Notes

Notes from install day. Deviations from plan, decisions made on site, gotchas, photos taken.

## Ad Hoc Changes Log

| Date | Change | Reason | By |
|---|---|---|---|
| YYYY-MM-DD | | | |

## Document Library

All documents live in Drive. Linked from here.

| Document Type | Drive Link | Notes |
|---|---|---|
| Sales agreements | [Drive folder] | Primary + supplementary |
| Floor plans | [Drive folder] | |
| Electrical plans | [Drive folder] | |
| Network diagram | [Drive folder] | |
| Site reference photos | [Drive folder] | Pre-install + post-install |
| Install photos | [Drive folder] | |
| Quarterly visit reports | [Drive folder] | PDFs from form submissions |

## Support History

[Link to incident tracker filtered by booking ID]

## Quarterly Visit Reports

| Date | Engineer | Issues Found | Report |
|---|---|---|---|
| YYYY-MM-DD | | | [PDF link] |

## End of Life

**Status:** Active
**End of life date:** TBD
**Notes:**
